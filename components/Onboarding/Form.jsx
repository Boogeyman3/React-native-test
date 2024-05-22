import React from 'react';
import images from '../../constants/images';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import FormField from '../FormField';
import { Link, router } from "expo-router";
import CustomButton from '../CustomButton';


const Form = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View className={"w-full justify-center items-center px-4"}>
            <Image source={images.leftIcon} className="self-start mt-2 mb-2" />
            <Text className={"text-xl self-start mt-4 text-[#AF362E] font-bold"}>
              Let's get to know you
            </Text>

              <View className='self-start w-full'>
                {/* firstName */}
              <Text className="text-sm font-medium text-[#0F172A]  mt-6 mb-[-12px]">
                First Name
              </Text>
                 <FormField
               title="e.g john"
                placeholder="e.g john"
                otherStyles='mt-2'  
               
                
              />
              {/* lastname */}
               <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
                Last Name
              </Text>
                 <FormField
               title="e.g Doe"
                placeholder="e.g Doe"
                otherStyles='mt-2'  
                
                
              />
              {/* phoneno */}
               <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
                  Phone No.
              </Text>
                 <FormField
               title="e.g +2348153541944"
                placeholder="e.g +2348153541944"
                otherStyles='mt-2'  
              />
                 {/* Street Address */}
            
               <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
                  Street Address
              </Text>
                 <FormField
               title="Street Address"
                placeholder="Enter Street, Landmark, Building etc3541944"
                otherStyles='mt-2'  
              />
              {/* city */}
                <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
                City
              </Text>
                 <FormField
               title="city"
                placeholder="Enter Street, Landmark, Building etc"
                otherStyles='mt-2'  
              />
              {/* state */}
             <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
                State
              </Text>
                 <FormField
               title="state"
                placeholder="Enter Street, Landmark, Building etc"
                otherStyles='mt-2'  
              />
              {/* Postal Code (Optional) */}
              <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
              Postal Code (Optional)
              </Text>
                 <FormField
               title=" Postal Code (Optional)"
                placeholder="Enter Street, Landmark, Building etc"
                otherStyles='mt-2'  
              />

             {/* Country */}

              <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
               Country
              </Text>
                 <FormField
               title="Country"
                placeholder="Enter Street, Landmark, Building etc"
                otherStyles='mt-2'  
              />

                {/* NIN */}

              <Text className="text-sm font-medium text-[#0F172A]  mt-4 mb-[-12px]">
               NIN
              </Text>
                 <FormField
               title="NIN"
                placeholder="National ID information"
                otherStyles='mt-2'  
              />
              </View>
     <CustomButton 
     containerStyles="mt-10"
      title="Continue" 
      onPress={() => router.push("/dashboard")}
      />

     <Image source={images.VectorForm} className='mt-8 mb-5'/>

          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default Form;
