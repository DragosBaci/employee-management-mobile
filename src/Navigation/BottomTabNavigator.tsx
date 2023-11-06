import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouterKey} from './Routes';
import Colors from '../Utils/Colors';
import EmployeeScreen from '../Screens/EmployeeScreen';
import DepartmentScreen from '../Screens/DepartmentScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerShown: false,
};

const tabBarStyle = {
  height: 90,
  paddingTop: 20,
  backgroundColor: Colors.BLACK,
  borderTopColor: Colors.BLACK,
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        ...tabBarOptions,
        tabBarStyle,
      }}>
      <Screen name={RouterKey.HOME_SCREEN} component={EmployeeScreen} />
      <Screen name={RouterKey.DEPARTMENT_SCREEN} component={DepartmentScreen} />
    </Navigator>
  );
};

export default BottomTabNavigator;
