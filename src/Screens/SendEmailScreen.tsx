import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import useGetCustomFetch from '../Hooks/useGetCustomFetch';
import RequestUrls from '../Backend/requestUrls';
import {employeeType} from '../Types/Types';
import useValidateUser from '../Hooks/useValidateUser';
import Colors from '../Utils/Colors';
import usePostCustomFetch from '../Hooks/usePostCustomFetch';

const SendEmailScreen = () => {
  const {token} = useValidateUser();
  const [employees, setEmployees] = useState<employeeType[]>([]);
  const [message, setMessage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

  const {fetcher: employeeFetch, response: employeeFetchResponse} =
    useGetCustomFetch<employeeType[], string>(RequestUrls.employees);

  const {fetcher: emailSendPayload, response: emailSendResponse} =
    usePostCustomFetch(RequestUrls.sendEmail);

  useEffect(() => {
    if (token) {
      employeeFetch(token);
    }
  }, [token]);

  useEffect(() => {
    if (employeeFetchResponse) {
      setEmployees(employeeFetchResponse);
    }
  }, [employeeFetchResponse]);

  const handleChange = (email: string) => {
    // Check if the email is already in the selectedEmails list
    if (selectedEmails.includes(email)) {
      // If it is, remove it from the list
      setSelectedEmails(selectedEmails.filter(e => e !== email));
    } else {
      // If it's not, add it to the list
      setSelectedEmails([...selectedEmails, email]);
    }
  };

  useEffect(() => {
    // Log the updated selectedEmails whenever it changes
    console.log(selectedEmails);
    console.log(message);
    console.log(emailSendResponse);
  }, [selectedEmails, message, emailSendResponse]);

  const handleMessageChange = useCallback((text: string) => {
    setMessage(text);
  }, []);

  const handleTitleChange = useCallback((text: string) => {
    setTitle(text);
  }, []);

  const handleSendEmail = () => {
    const payload = {
      emails: selectedEmails,
      message: message,
      subject: title,
    };
    console.log(payload);
    emailSendPayload(payload, token);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.titleText}>Choose employee to send email to:</Text>
        {employees &&
          employees.map((item: employeeType) => (
            <View key={item.id} style={styles.container}>
              <CheckBox
                value={selectedEmails.includes(item.email)}
                onValueChange={() => handleChange(item.email)}
              />
              <Text>{item.email}</Text>
            </View>
          ))}
        <TextInput
          style={styles.emailTitle}
          placeholder={'title:'}
          placeholderTextColor={Colors.GREY}
          value={title}
          onChangeText={handleTitleChange}
          secureTextEntry={false}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder={'message...'}
            placeholderTextColor={Colors.GREY}
            value={message}
            onChangeText={handleMessageChange}
            secureTextEntry={false}
          />
        </View>
        <Button title={'Send Email'} onPress={handleSendEmail} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emailTitle: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: '95%',
    borderRadius: 8,
    marginBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    paddingVertical: 15,
    fontSize: 18,
    padding: 14,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: '95%',
    borderRadius: 8,
    marginBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    minHeight: 200,
  },
  inputField: {
    padding: 14,
    fontSize: 18,
    width: '90%',
    color: Colors.BLACK,
  },
});

export default SendEmailScreen;
