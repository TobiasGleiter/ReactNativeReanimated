import React from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {citiesData} from '../data/citiesData';

const renderItem = ({item, navigation}: any) => (
  <Pressable
    className="w-1/2 rounded-xl p-1"
    onPress={() => navigation.navigate('Details', {item})}>
    <View className="rounded-xl bg-zinc-300 shadow-lg">
      <Animated.Image
        sharedTransitionTag={`image-${item.id}`}
        source={{uri: item.image}}
        className="w-full h-36 rounded-t-xl"
      />
      <View className="bg-white rounded-b-xl">
        <Text className="text-base text-center p-2 font-semibold text-black">
          {item.name}
        </Text>
      </View>
    </View>
  </Pressable>
);

export default function HomeScreen({navigation}: any) {
  const sharedValue = useSharedValue(0);

  return (
    <SafeAreaView className="mx-4">
      <View className="flex flex-row items-baseline gap-1 mt-2">
        <Text className="text-3xl font-bold">Find.</Text>
        <Text className="text-3xl">Explore.</Text>
        <Text className="text-3xl">Cities.</Text>
      </View>
      <FlatList
        data={citiesData}
        renderItem={({item}) => renderItem({item, navigation})}
        keyExtractor={item => item.id}
        numColumns={2}
        className="mt-2 mb-12"
      />
    </SafeAreaView>
  );
}
