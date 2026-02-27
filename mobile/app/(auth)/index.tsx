import React from "react";
import { View, Text, Dimensions,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";



const { width, height } = Dimensions.get("window");

const AuthScreen = () => {
  return (
    <View className="flex-1 bg-black">
      
      {/* Background Decorative Layer */}
      <View className="absolute inset-0 overflow-hidden" />

      <SafeAreaView className="flex-1">
        
        {/* Top Section - Branding */}
        <View className="items-center pt-16">
          
          <Image
            source={require("../../../assets/images/logo.png")}
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
          />

          <Text className="text-4xl font-bold text-white tracking-widest mt-2">
            WHISPER
          </Text>

        </View>
        
        {/* CeNter section - hero img */}
        <View className = "flex-1 justify-center items-center px-6">
          <Image source={require("../../assets/images/auth.png")} style={{ width: width * 0.8, height: height * 0.4 }} resizeMode="contain" />
        </View> 
   

      </SafeAreaView>
    </View>
  );
};

export default AuthScreen;