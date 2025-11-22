import { View, TextInput, Image, Pressable } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

type SearchBarProps = {
  editable?: boolean;
  placeholder?: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchBar = ({
  onPress,
  placeholder,
  editable = true,
  value,
  onChangeText,
}: SearchBarProps) => {
  const Wrapper = editable ? View : Pressable;

  return (
    <Wrapper onPress={!editable ? onPress : undefined}>
      <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor={"#ab8bff"}
        />
        <TextInput
          editable={editable}
          showSoftInputOnFocus={editable}
          pointerEvents={editable ? "auto" : "none"}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#a8b5db"
          className="flex-1 ml-2 text-white"
        />
      </View>
    </Wrapper>
  );
};

export default SearchBar;
