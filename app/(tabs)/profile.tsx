import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex  justify-center items-center flex-1 flex-col gap-5">
        
        <View className="w-full flex flex-col items-center gap-6">
          <Text className="text-white text-2xl font-bold mt-2">My Profile</Text>

          <View className=" p-6 rounded-2xl w-full items-center border ">
            <Image
          source={icons.person}
          className="size-10 mb-4"
          tintColor={"#fff"}
        ></Image>
            <Text className="text-white text-xl font-semibold">Mohammed Semai</Text>
            <Text className="text-gray-300 text-sm"></Text>
            <View className="flex-row mt-4 gap-4">
              <View className="items-center">
          <Text className="text-white font-bold text-lg">3</Text>
          <Text className="text-gray-400 text-xs">Saved</Text>
              </View>
              <View className="w-[1px] h-full bg-gray-600" />
              <View className="items-center">
          <Text className="text-white font-bold text-lg">5</Text>
          <Text className="text-gray-400 text-xs">Reviews</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="w-[35%] gap-5">
            <TouchableOpacity>
              <Text className=" bg-accent text-white text-center py-4 rounded-xl font-bold text-lg w-full">
                  Edit Profile
              </Text>
            </TouchableOpacity>
              
            <TouchableOpacity>
              <Text className=" border border-gray-500 text-white text-center py-4 rounded-xl font-bold text-lg w-full">
          Log Out
              </Text>
            </TouchableOpacity>
              
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
