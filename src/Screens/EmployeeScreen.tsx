import {useEffect, useState} from 'react';
import useValidateUser from '../Hooks/useValidateUser';
import requestUrls from '../Backend/requestUrls';
import useGetCustomFetch from '../Hooks/useGetCustomFetch';
import EmployeeCard from '../Components/EmployeeCard';
import { Button, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Colors from '../Utils/Colors';
import {employeeType} from '../Types/Types';
import { useNavigation } from "@react-navigation/native";
import { RouterKey } from "../Navigation/Routes";

const EmployeeScreen = () => {
  const navigation = useNavigation();
  const [employeeList, setEmployeeList] = useState<employeeType[]>([]);
  const {response, fetcher: employeeFetch} = useGetCustomFetch<
    employeeType[],
    string
  >(requestUrls.employees);
  const {token} = useValidateUser();

  useEffect(() => {
    if (token !== null) {
      employeeFetch(token);
    }
  }, [token]);

  useEffect(() => {
    if (response) {
      setEmployeeList(response);
    }
  }, [response]);

  const handlePressHandler = () => {
    navigation.navigate(RouterKey.SEND_EMAIL_SCREEN as never);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Button title={'Send Email'} onPress={handlePressHandler} />
      <ScrollView>
        {employeeList.map((item: any) => (
          <EmployeeCard
            id={item.id}
            name={item.name}
            email={item.email}
            key={item.id}
            imageUri={item.imageUri}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.GREY,
    flex: 1,
  },
});

export default EmployeeScreen;
