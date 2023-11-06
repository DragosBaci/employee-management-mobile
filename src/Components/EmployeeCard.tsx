import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './EmployeeCard.style';
import {useNavigation} from '@react-navigation/native';
import {RouterKey} from '../Navigation/Routes';
import {DepartmentCardProps} from './DepartmentCard';

export interface EmployeeCardProps {
  id: number;
  name: string;
  email: string;
  imageUri: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  name,
  email,
  imageUri,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    // @ts-ignore
    navigation.navigate(RouterKey.EMPLOYEE_DETAIL_SCREEN, {
      id: id,
      imageUri: imageUri,
      name: name,
      email: email,
    } as DepartmentCardProps);
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.rootContainer}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'http://localhost:8080' + imageUri,
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Name: {name}</Text>
            <Text style={styles.cardLabel}>Email: {email}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EmployeeCard;
