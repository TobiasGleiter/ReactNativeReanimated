import React from 'react';
import {Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';

const gradientColors = [
  ['#FF6B6B', '#FF8E53'], // Red to Orange
  ['#E2B0FF', '#9F44D3'], // Purple to Dark Purple
  ['#6ED3CF', '#3B91D9'], // Teal to Blue
  ['#FFC3A0', '#FFAFBD'], // Light Pink to Lighter Pink
  ['#FFDAC1', '#FF9A8B'], // Light Orange to Lighter Orange
  ['#C1E1DC', '#A6E3E9'], // Light Blue to Lighter Blue
  ['#FDCB6E', '#D57186'], // Gold to Pink
  // Add more gradient color combinations as needed
];

export default function card({item, navigation}: any, index: number) {
  const gradientColor = gradientColors[index % gradientColors.length];

  return (
    <Pressable
      className="relative w-1/2 rounded-xl p-1"
      onPress={() => navigation.navigate('Details', {item, gradientColor})}>
      <View className="rounded-xl bg-zinc-300 shadow-sm">
        <View className="absolute z-10 justify-center items-center w-full h-36 mt-2">
          <Text className="text-4xl font-bold">{item.code}</Text>
        </View>
        <LinearGradient colors={gradientColor} className="rounded-xl">
          <Animated.Image
            //sharedTransitionTag={`image-${item.code}`}
            source={{uri: item.image}}
            className="w-full h-36 rounded-t-xl"
          />
          <View className="bg-white rounded-b-xl">
            <Text className="text-base text-center p-2 font-semibold text-black">
              {item.name}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
}
