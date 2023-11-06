import {useEffect, useState} from 'react';
import useValidateUser from '../Hooks/useValidateUser';
import requestUrls from '../Backend/requestUrls';
import useGetCustomFetch from '../Hooks/useGetCustomFetch';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import DepartmentCard from '../Components/DepartmentCard';

const DepartmentScreen = () => {
  const [departmentList, setDepartmentList] = useState<any[]>([]);
  const {response, fetcher: departmentFetch} = useGetCustomFetch<any, any>(
    requestUrls.departments,
  );
  const {token} = useValidateUser();

  useEffect(() => {
    console.log(token);
    if (token !== null) {
      departmentFetch(token);
    }
  }, [token]);

  useEffect(() => {
    if (response) {
      setDepartmentList(response);
    }
  }, [response]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        {departmentList.map((item: any) => (
          <DepartmentCard
            id={item.id}
            description={item.description}
            imageUri={item.imageUri}
            key={item.id}
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
    alignItems: 'center',
  },
});

export default DepartmentScreen;
