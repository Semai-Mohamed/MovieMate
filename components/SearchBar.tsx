import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

type SearchBarProps = {
  onPress: () => void;
}

const SearchBar = ({ onPress }: SearchBarProps) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image source={icons.search} className='size-5' resizeMode='contain' tintColor={'#ab8bff'}></Image>
        <TextInput 
        onPress={onPress}
        placeholder='Search for movie'
        value=''
        onChangeText={()=>{}}
        placeholderTextColor='#a8b5db'
        className='flex-1 ml-2 text-white'
        ></TextInput>
    </View>
  )
}
    
export default SearchBar