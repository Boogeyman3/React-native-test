import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomButton from '../CustomButton';
import FormField from '../FormField';
import images from '../../constants/images';
const EmailScreen = ({handleNext}) => {
    const [email, setEmail] = useState("")
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View className={`w-full justify-center items-center h-full px-6 pt-7`}>
        <Image source={images.logo} className={"mb-16"}/>
          <Text className="text-left w-full px-2 text-md" >Email or Phone</Text>
        
          <FormField
          title="Email"
          value={email}
          handleChangeText={(e) => setEmail(e)}
          placeholder="Email"
          otherStyles="mt-7"
          keyboardType="email-address"
        />
     <CustomButton 
     containerStyles={"mt-10"}
     title="Continue"
     onPress={handleNext}
     />
    
         <Text className=" underline text-md mt-7" >Forget password</Text>
         <Text className="underline px-2 text-md mt-3" >Existing User? Tap here to Login</Text>
     

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
  
  });
  
export default EmailScreen
