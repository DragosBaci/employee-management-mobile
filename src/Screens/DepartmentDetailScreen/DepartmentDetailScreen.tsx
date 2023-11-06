import {useEffect, useState} from 'react';
import {departmentType, employeeType} from '../../Types/Types';
import useValidateUser from '../../Hooks/useValidateUser';
import requestUrls from '../../Backend/requestUrls';
import useGetCustomFetch from '../../Hooks/useGetCustomFetch';
import DetailCard from '../../Components/DetailCard';
import DepartmentCard from '../../Components/DepartmentCard';
import {ScrollView, StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';
import EmployeeCard from '../../Components/EmployeeCard';
import SubtitleCard from '../../Components/SubtitleCard';

const DepartmentDetailScreen = ({route}: any) => {
  const {id, imageUri, description} = route.params;
  const [subdepartments, setSubdepartments] = useState<departmentType[]>([]);
  const [employees, setEmployees] = useState<employeeType[]>([]);
  const {token} = useValidateUser();

  const subdepartmentObjectRequestUrl = requestUrls.subdepartments.replace(
    ':id',
    `${id}`,
  );

  const employeesObjectRequestUrl = requestUrls.employeesInDepartment.replace(
    ':id',
    `${id}`,
  );

  const {fetcher: subdepartmentsPayload, response: subdepartmentsResponse} =
    useGetCustomFetch<departmentType[], string>(subdepartmentObjectRequestUrl);
  const {fetcher: employeesPayload, response: employeesResponse} =
    useGetCustomFetch<employeeType[], string>(employeesObjectRequestUrl);

  useEffect(() => {
    subdepartmentsPayload(token);
    employeesPayload(token);
  }, [token]);

  useEffect(() => {
    if (subdepartmentsResponse) {
      setSubdepartments(subdepartmentsResponse);
    }
  }, [subdepartmentsResponse]);

  useEffect(() => {
    if (employeesResponse) {
      setEmployees(employeesResponse);
    }
  }, [employeesResponse]);

  return (
    <ScrollView style={styles.rootContainer}>
      <DetailCard imageUri={imageUri} description={description} />
      <SubtitleCard text={'Subdepartments'} />
      {subdepartments &&
        subdepartments.map((item: any) => (
          <DepartmentCard
            id={item.id}
            description={item.description}
            imageUri={item.imageUri}
            key={item.id}
          />
        ))}
      <SubtitleCard text={'Employees In Department'} />
      {employees &&
        employees.map((item: any) => (
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
    backgroundColor: Colors.GREY,
  },
});

export default DepartmentDetailScreen;
