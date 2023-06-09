import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold"> Travel</Text>
      </View>
      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px]">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          A journey is like a marriage. The certain way to be wrong is to think
          you control it.
        </Text>
      </View>

      {/* 3rd SEction */}
      <View className="w-[400px] h-[400px] rounded-full absolute bg-[#00BCC9] bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] rounded-full absolute bg-[#E99265] -bottom-28 -left-36"></View>
      {/* Image */}
      <View className="flex-1  items-center justify-center mt-5">
        <Animatable.Image animation="fadeIn" easing="ease-in-out"
          source={require("../assets/hero.png")}
          className="w-full h-full object-cover"
        />

          <TouchableOpacity onPress={()=> navigation.navigate("Discover")} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9]  rounded-full items-center justify-center">
        <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className="text-gray-50 text-[36px] font-semibold">GO</Text>
        </Animatable.View>
      </TouchableOpacity>

      </View>
    
    </SafeAreaView>
  );
};

export default HomeScreen;
