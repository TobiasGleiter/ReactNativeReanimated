import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import Animated, {
  FadeInLeft,
  FadeInUp,
  useSharedValue,
} from 'react-native-reanimated';

const DetailScreen = ({navigation, route}: any) => {
  const {item} = route.params;

  const sharedValue = useSharedValue(0);

  return (
    <View className="relative">
      <Pressable
        onPress={() => navigation.navigate('Home')}
        className="absolute top-10 left-2 z-20 px-4 rounded-lg bg-white w-fit">
        <Text className="text-xl">Back</Text>
      </Pressable>
      <ScrollView>
        <Animated.Image
          entering={FadeInUp.duration(600)}
          source={{uri: item.image}}
          style={{width: '100%', height: 250}}
          className="z-0"
        />
        <View className="px-6 pt-2 pb-20">
          <Animated.Text
            entering={FadeInLeft.duration(750)}
            className="w-full items-center text-xl font-bold">
            {item.name}
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(750)}
            className="text-base text-justify">
            {item.description}
          </Animated.Text>
        </View>
      </ScrollView>

      {/* Access other details about the city from the 'item' object here */}
    </View>
  );
};

export default DetailScreen;
