import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import InputField from "@/components/InputField";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";

const SignIn = () => {
    const router = useRouter();
    const [isSecureVisible, setIsSecureVisible] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [userName, setUserName] = React.useState("");
  return (
    <View className="bg-primary flex-1 gap-40 items-center">
      <Image source={icons.logo} className="w-12 h-10 mt-32  mx-auto"></Image>
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      ></Image>
      <View className=" flex flex-1 items-center gap-y-4 w-[90%]">
        <Text className="text-xl text-white  ">UserName</Text>
        <InputField placeholder="Enter your userName" value={userName} onChangeText={(text) => setUserName(text)}></InputField>
        <Text className="text-xl text-white font-bold ">password</Text>
        <InputField placeholder="Enter your password" secure={true} isSecureVisible={isSecureVisible} setIsSecureVisible={() => setIsSecureVisible(!isSecureVisible)} value={password} onChangeText={(text) => setPassword(text)}></InputField>
          <TouchableOpacity 
          className="w-full mt-8 items-center justify-center"
          activeOpacity={0.8}
        >
            <View className=" w-[40%] py-4 rounded-2xl shadow-lg shadow-black/25 flex-row justify-center items-center border border-white/10">
              <Text className="text-white text-xl font-bold tracking-wider uppercase" onPress={()=> router.push('/')}>Sign In</Text>
            </View>
        </TouchableOpacity>
       
        <View className="mt-20   bg-white w-[60%] py-1 rounded-3xl flex flex-row   justify-center items-center">
            <Image source={icons.google} className="size-16"></Image>
            <Text className="text-[#030014] text-lg font-semibold"> Google</Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
