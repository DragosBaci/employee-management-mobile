import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import requestUrls from '../../Backend/requestUrls';
import useGetCustomFetch from '../../Hooks/useGetCustomFetch';
import React, {useEffect, useState} from 'react';
import useValidateUser from '../../Hooks/useValidateUser';
import Colors from '../../Utils/Colors';
import {employeeType} from '../../Types/Types';
import EmployeeCard from '../../Components/EmployeeCard';
import DetailCard from '../../Components/DetailCard';
import SubtitleCard from '../../Components/SubtitleCard';
import DepartmentCard from '../../Components/DepartmentCard';

const EmployeeDetailScreen = ({route}: any) => {
  const {id, imageUri, email, name} = route.params;
  const [employee, setEmployee] = useState<employeeType>();
  const [subordinates, setSubordinates] = useState<employeeType[]>([]);
  const {token} = useValidateUser();

  const employeeObjectRequestUrl = requestUrls.employee.replace(':id', `${id}`);
  const subordinatesObjectRequestUrl = requestUrls.subordinates.replace(
    ':id',
    `${id}`,
  );

  const {fetcher: employeePayload, response: employeeResponse} =
    useGetCustomFetch<employeeType, string>(employeeObjectRequestUrl);
  const {fetcher: subordinatesPayload, response: subordinatesResponse} =
    useGetCustomFetch<employeeType[], string>(subordinatesObjectRequestUrl);

  useEffect(() => {
    employeePayload(token);
    subordinatesPayload(token);
  }, [token]);

  useEffect(() => {
    if (employeeResponse) {
      setEmployee(employeeResponse);
    }
  }, [employeeResponse]);

  useEffect(() => {
    console.log(subordinatesResponse);
    if (subordinatesResponse) {
      setSubordinates(subordinatesResponse);
    }
  }, [subordinatesResponse]);

  return (
    <ScrollView style={styles.rootContainer}>
      <DetailCard imageUri={imageUri} name={name} />
      <SubtitleCard text={'Subordinates'} />
      {subordinates &&
        subordinates.map((item: any) => (
          <EmployeeCard
            name={item.name}
            email={item.email}
            imageUri={item.imageUri}
            id={item.id}
            key={item.id}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
  cardContainer: {
    height: '90%',
    width: '90%',
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
});

export default EmployeeDetailScreen;
