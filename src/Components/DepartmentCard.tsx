import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './EmployeeCard.style';
import {useNavigation} from '@react-navigation/native';
import {RouterKey} from '../Navigation/Routes';

export interface DepartmentCardProps {
  description: string;
  imageUri: string;
  id: number;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  id,
  description,
  imageUri,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    // @ts-ignore
    navigation.navigate(RouterKey.DEPARTMENT_DETAIL_SCREEN, {
      id: id,
      imageUri: imageUri,
      description: description,
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
            style={{...styles.cardImage, resizeMode: 'contain'}}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Name: {description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DepartmentCard;
