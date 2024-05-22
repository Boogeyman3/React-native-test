import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router/stack';

const DashboardLayout = () => {
  return (
        <Stack>
          <Stack.Screen name="index" options={{headerShown:false}}/>     

          <Stack.Screen name="dashboard" options={{headerShown:false}}/>   
        </Stack>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})