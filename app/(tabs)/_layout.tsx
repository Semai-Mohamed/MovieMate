import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
   <Tabs>
    <Tabs.Screen name='index' options={{headerShown : false , title : 'Home'}}></Tabs.Screen>
    <Tabs.Screen name='Search' options={{headerShown : false , title : 'Search'}}></Tabs.Screen>
    <Tabs.Screen name='Saved' options={{headerShown : false , title : 'Saved'}}></Tabs.Screen>
    <Tabs.Screen name='Profile' options={{headerShown : false , title : 'Profile'}}></Tabs.Screen>
   </Tabs>
  )
}

export default _layout