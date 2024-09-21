import { View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="px-4 items-center justify-center">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>
      <Text className="text-xl text-center mt-2 font-psemibold text-white">
        {subtitle}
      </Text>

      <CustomButton
        title="Create video"
        handlePress={() => {
          router.push("/create");
        }}
        className="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
