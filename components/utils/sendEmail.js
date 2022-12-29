import email from 'react-native-email';
import { Alert } from "react-native";

//Function to send enquiry form data as an email from phone email client
export async function handleEmail(emailId, enquiry) {
  const to = emailId // string or array of email addresses
  const status = await email(to, {

    subject: 'New Enquiry',
    body: `Name: ${enquiry.name}\n Mobile No: ${enquiry.mobileNumber} \n Email: ${enquiry.email}\n Message: ${enquiry.message}`,
    checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
  }).catch(console.error)
}



