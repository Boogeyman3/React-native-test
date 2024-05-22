import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomButton from '../CustomButton';
import FormField from '../FormField';
import images from '../../constants/images';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OtpScreen = ({handleNext}) => {
    const [email, setEmail] = useState("")
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View className={`w-full justify-center items-center h-full px-4`}>
        <Image source={images.logo} className={"mb-16"}/>
      
        <OTPInputView
                            style={styles.otpContainer}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.otpInputField}
                            codeInputHighlightStyle={styles.otpInputHighlight}
                            onCodeFilled={(code) => {
                                console.log(`Code is ${code}, you are good to go!`);
                            }}
                        />
     <CustomButton 
     containerStyles={"mt-10"}
     title="Continue"
     onPress={handleNext}
     />
    
         <Text className="  text-md mt-7" >Expires in 05:00</Text>
         <Text className="underline px-2 text-md mt-3" >Resend OTP</Text>
     

        </View>
      </ScrollView>
    </SafeAreaView>
  </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  scrollViewContent: {
      flexGrow: 1,
  },
  contentContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      paddingHorizontal: 16,
  },
  
  otpContainer: {
      width: '90%',
      height: 50,
  },
  otpInputField: {
      width: 75,
      height: 45,
      borderColor: '#CBD5E1',
      color: 'black',
      padding: 10,
      borderRadius:"5px"
  },
 
  
});

export default OtpScreen
