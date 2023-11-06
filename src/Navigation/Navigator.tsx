import {RouterKey} from './Routes';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import EmployeeScreen from '../Screens/EmployeeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import DepartmentScreen from '../Screens/DepartmentScreen';
import DepartmentDetailScreen from '../Screens/DepartmentDetailScreen/DepartmentDetailScreen';
import EmployeeDetailScreen from '../Screens/EmployeeDetailScreen/EmployeeDetailScreen';

const screenRoutes = [
  {name: RouterKey.REGISTER_SCREEN, component: RegisterScreen},
  {name: RouterKey.LOGIN_SCREEN, component: LoginScreen},
  {name: RouterKey.HOME_SCREEN, component: HomeScreen},
  {name: RouterKey.EMPLOYEE_SCREEN, component: EmployeeScreen},
  {name: RouterKey.BOTTOM_TAB_NAVIGATOR, component: BottomTabNavigator},
  {name: RouterKey.DEPARTMENT_SCREEN, component: DepartmentScreen},
  {name: RouterKey.DEPARTMENT_DETAIL_SCREEN, component: DepartmentDetailScreen},
  {name: RouterKey.EMPLOYEE_DETAIL_SCREEN, component: EmployeeDetailScreen},
];

const tabBarOptions = {
  headerShown: false,
};

export const RoutesMapping = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator
      screenOptions={tabBarOptions}
      initialRouteName={RouterKey.LOGIN_SCREEN}>
      {screenRoutes.map(route => {
        return (
          <Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Navigator>
  );
};

export default RoutesMapping;
