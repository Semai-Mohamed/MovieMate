import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import SignIn from "../(auth)/signIn";
import { Link } from "expo-router";

const Profile = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image
          source={icons.person}
          className="size-10"
          tintColor={"#fff"}
        ></Image>
        <View className=" flex flex-col">
          <Link href="/(auth)/signIn" asChild>
            <Text className="text-gray-500 text-base mb-5">Sign In</Text>
          </Link>
          <Link href="/(auth)/signUp" asChild>
            <Text className="text-gray-500 text-base"> Sign Up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Profile;
