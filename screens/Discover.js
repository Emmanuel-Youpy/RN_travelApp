import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Discover = () => {
    const APIKEY = 'AIzaSyB8vv4xBlAUz7n0jksvMuWQlQUvkIR7Bqw'
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[#0B646B] text-[40px] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px] ">the beauty todaygg</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center "> 
        <Image
          source={require("../assets/avatar.png")}
          className="w-full h-full object-cover"
        />

        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl px-4 py-1 mt-4 shadow-lg">
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: APIKEY,
        language: 'en',
      }}
    />

      </View>
    </SafeAreaView>
  );
};

export default Discover;
