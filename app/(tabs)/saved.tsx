import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const Saved = () => {
  return (
      <View className="bg-primary flex-1 px-10">
        <View className="flex justify-center items-center flex-1 flex-col gap-5">
          <Image
            source={icons.save}
            className="size-10"
            tintColor={"#fff"}
          ></Image>
          <Text className="text-gray-500 text-base ">save</Text>
        </View>
      </View>
    );
};

export default Saved;

const styles = StyleSheet.create({});
