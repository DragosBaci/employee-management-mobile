import {createContext, FC, useContext, useEffect} from 'react';
import usePostCustomFetch from './usePostCustomFetch';
import usePersistentState, {removeStorage} from './usePersistentState';
import requestUrls from '../Backend/requestUrls';
import {StackActions, useNavigation} from '@react-navigation/native';
import {RouterKey} from '../Navigation/Routes';

const useAuthService = () => {
  const {set: setToken} = usePersistentState('token');
  const navigation = useNavigation();
  const {
    response: loginResponse,
    error: loginError,
    loading: loginLoading,
    fetcher: sendLoginPayload,
  } = usePostCustomFetch<any, any>(requestUrls.authLogin);

  const logUserIn = (email: string, password: string) => {
    const payload = {
      email: email,
      password: password,
    };
    sendLoginPayload(payload);
  };

  const logUserOut = async () => {
    await removeStorage('token');
    navigation.dispatch(StackActions.replace(RouterKey.LOGIN_SCREEN));
    setAuthFields('');
    setToken('');
  };
  const setAuthFields = (props?: any) => {
    setToken(props ? props.token : '');
  };

  useEffect(() => {
    if (loginResponse) {
      if (loginResponse.token) {
        setAuthFields(loginResponse?.status ? undefined : loginResponse);
        navigation.dispatch(
          StackActions.replace(RouterKey.BOTTOM_TAB_NAVIGATOR),
        );
        loginResponse.token = null;
      }
    }
    // eslint-disable-next-line
  }, [loginError, loginResponse, loginLoading]);

  return {
    logUserIn,
    logUserOut,
    loginResponse,
  };
};

const initialState = {
  logUserIn: (user: string, pass: string) => undefined,
  logUserOut: () => undefined,
  loginResponse: '',
};

export const AuthContext = createContext<
  ReturnType<typeof useAuthService> | typeof initialState
>(initialState);

export const AuthProvider: FC<any> = ({children}) => {
  const auth = useAuthService();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
