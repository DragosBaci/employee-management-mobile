import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RouterKey} from '../Navigation/Routes';
import {useAuth} from '../Hooks/useAuth';
import Colors from '../Utils/Colors';
import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const LoginScreen = () => {
  const {logUserIn, loginResponse} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleUsernameChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleLogin = async () => {
    logUserIn(email, password);
  };

  return (
    <Center w="100%" h="100%" bg={Colors.GREY}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="xl"
          fontWeight="600"
          color="white"
          _dark={{
            color: Colors.LIGHT_GRAY,
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: Colors.WHITE,
          }}
          color={Colors.LIGHT_GRAY}
          fontWeight="medium"
          size="s">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              onChangeText={handleUsernameChange}
              autoCapitalize={'none'}
              color={Colors.LIGHT_GRAY}
              textDecorationColor={Colors.WHITE}
              height={10}
              fontSize={16}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              onChangeText={handlePasswordChange}
              autoCapitalize={'none'}
              height={10}
              fontSize={14}
              color={Colors.LIGHT_GRAY}
              type="password"
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => {
                navigation.navigate(RouterKey.REGISTER_SCREEN as never);
              }}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
