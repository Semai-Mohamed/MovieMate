import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

type InputFieldProps = {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  secure?: boolean;
  setIsSecureVisible?: () => void;
  isSecureVisible?: boolean;
};
const InputField = ({ onChangeText, value, placeholder, secure = false, setIsSecureVisible, isSecureVisible = true }: InputFieldProps) => {
  return (
    <View className="flex-row w-full bg-dark-200 rounded-full justify-center px-8     mx-6 items-center">
      
      <TextInput
        placeholderTextColor="#a8b5db"
        className="text-white pl-4 py-4  w-full  rounded-full ml-2"
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secure && !isSecureVisible}
      ></TextInput>
     ({secure&& 
      <TouchableOpacity onPress={setIsSecureVisible}>
        <Ionicons name={isSecureVisible ? "eye-off" : "eye"} size={24} color="white" />
      </TouchableOpacity>})
    </View>
  );
};

export default InputField;
