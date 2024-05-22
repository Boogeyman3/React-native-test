import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomButton from '../CustomButton';
import FormField from '../FormField';
import images from '../../constants/images';

const PasswordScreen = ({handleNext}) => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View className={`w-full justify-center items-center  px-4`}>
        <View className="w-full justify-center items-center mb-24  mt-3 ">
            <View className="bg-[#AF362E] w-full rounded-xl flex-row   items-center p-4">
              <Image source={images.verified} className="w-7 h-7" />
              <View className="ml-4">
                <Text className="text-white font-bold mb-1">Email Verified</Text>
                <Text className="text-white font-normal">Continue Your Registration</Text>
              </View>
            </View>
          </View>
        <Image source={images.logo} className={"mb-9"}/>
          <Text className="text-left w-full px-2 text-md mt-10" >Password</Text>
        
          <FormField
          title="Password"
          value={password}
          handleChangeText={(e) => setPassword(e)}
          placeholder=".........."
          otherStyles="mt-7"
          keyboardType="email-address"
        />
             <Text className="text-left w-full px-2 mt-3 text-md" >Confirm Password</Text>
         <FormField
          title="Password"
          value={confirmPassword}
          handleChangeText={(e) => setConfirmPassword(e)}
          placeholder=".........."
          otherStyles="mt-7"
          keyboardType="email-address"
        />
     <CustomButton 
     containerStyles={"mt-10"}
     title="Continue"
     onPress={handleNext}
     />
    
      
     

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
  
export default PasswordScreen
