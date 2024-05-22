
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import images from '../../constants/images';


const index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View className={`w-full justify-center items-center h-full px-4 mt-5`}>
        
        <View className={`w-full   flex-row justify-between `}>
        <Text className={"text-2xl   text-[#AF362E] font-bold "}>Earnings</Text>
          <View className={"bg-[#FFEED0] rounded-md flex-row items-center justify-between gap-2"}>
           <Image source={images.dot}/>
          <Text className={"text-md  mt-4 text-[#AF362E] font-bold px-3"}>10 New Deliveries</Text>
          </View>
         </View>
     
        <View className={'bg-[#AF362E] w-full h-[80px] px-2 mt-8  flex-row items-center justify-between rounded-md'}> 
        <Text className={'text-md text-white'}>Total Revenue</Text>
        <Text className={'text-2xl text-white'}>₦152,000.00</Text>
        </View>

        <View className={'bg-[#FFEED0] w-full h-[80px] px-2 mt-3  flex-row items-center justify-between rounded-md'}> 
        <Text className={'text-md text-[#AF362E] font-bold'}>Total Revenue</Text>
        <Text className={'text-2xl text-[#AF362E] font-bold'}>334</Text>
        </View>


        <View className={'bg-[#FFEED0] w-full h-[80px] px-2 mt-3  flex-row items-center justify-between rounded-md'}> 
        <Text className={'text-md text-[#AF362E] font-bold'}>Successful Deliveries</Text>
        <Text className={'text-2xl text-[#AF362E] font-bold'}>304</Text>
        </View>

        <View className={'bg-[#FFEED0] w-full h-[80px] px-2 mt-3  flex-row items-center justify-between rounded-md'}> 
        <Text className={'text-md text-[#AF362E] font-bold'}>Unsuccessful Deliveries</Text>
        <Text className={'text-2xl text-[#AF362E] font-bold'}>30</Text>
        </View>

        <View className={'mt-5 flex-row justify-between w-full px-1'}>
          <Text className={'font-bold text-base'}>Recent Deliveries</Text>
          <Text className={'text-[#ABABAB]'}>see all</Text>
        </View>

        <View className={' mt-10'}> 
        <View className={'flex-row w-full justify-between  items-center'}>
        <Text className={'text-[#410400] text-base font-bold '}>Order D24</Text>
          <View className={'bg-[#AF362E] rounded-3xl w-[100px] p-3'}><Text className={'text-center text-white font-bold'}> Delivered</Text></View>
        </View>
        <Text className={'text-[#9F9F9F] text-sm mt-2 font-bold' }>Area 11, 8 Ikot-Ekpene Cl, off Emeka Anyaoku Street, Garki, Abuja 900103, Federal Capital Territory</Text>
       </View>

       <View style={styles.line} />

       <View className={' mt-6'}> 
        <View className={'flex-row w-full justify-between  items-center'}>
        <Text className={'text-[#410400] text-base font-bold '}>Order D24</Text>
          <View className={'bg-[#AF362E] rounded-3xl w-[100px] p-3'}><Text className={'text-center text-white font-bold'}> Delivered</Text></View>
        </View>
        <Text className={'text-[#9F9F9F] text-sm mt-2 font-bold' }>Area 11, 8 Ikot-Ekpene Cl, off Emeka Anyaoku Street, Garki, Abuja 900103, Federal Capital Territory</Text>
       </View>
       
       <View style={styles.line} />
       </View>
       
      </ScrollView>
    </SafeAreaView>
</GestureHandlerRootView>
  )
}

export default index

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#E2E8F0',
    marginTop:15,
    borderBottomWidth: 1,
    width: '100%',
    padding:"0"
  },
})