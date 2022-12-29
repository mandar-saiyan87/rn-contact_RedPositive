import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import { TextInput } from 'react-native-paper';
import { handleEmail } from '../utils/sendEmail';


function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    message: ""
  });

  // Email validation
  function emailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  //Mobile no validation
  function mobileValid(number) {
    const reg = /^[789]\d{9,9}$/g
    return reg.test(number)
  }

  async function handleSubmit(name, no, email, message) {
    // console.log(formData)

    if (!formData.name && !formData.mobileNumber && !formData.email && !formData.message) {
      Alert.alert('All fields are required.');
    } else if (formData.name.length < 3) {
      Alert.alert('Name should be atleast 3 characters')
    } else if (!emailValid(formData.email)) {
      Alert.alert('Please enter valid email id.');
    } else if (!mobileValid(formData.mobileNumber)) {
      Alert.alert('Please enter valid mobile no.');
    } else {
      handleEmail('info@redpositive.in', formData);
      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        message: ""
      })
    }
  }


  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.inputStyle}
          label="Name"
          value={formData.name}
          onChangeText={name => setFormData({ ...formData, name: name })}
        />
        <TextInput style={styles.inputStyle}
          maxLength={10}
          label="Mobile Number"
          keyboardType="number-pad"
          value={formData.mobileNumber}
          onChangeText={mobileNumber => setFormData({ ...formData, mobileNumber: mobileNumber })}
        />
        <TextInput style={styles.inputStyle}
          label="Email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={email => setFormData({ ...formData, email: email })}
        />
        <TextInput style={[styles.inputStyle, styles.message]}
          label="Message"
          multiline={true}
          value={formData.message}
          onChangeText={message => setFormData({ ...formData, message: message })}
        />
        <Pressable style={styles.buttonStyle} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </Pressable>
      </View>

    </>
  )
}

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  inputStyle: {
    marginTop: 15
  },
  message: {
    height: 140
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#b897d8',
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: '700'
  }
});
