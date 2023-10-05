import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

const citiesData = [
  {
    id: '1',
    name: 'New York',
    image:
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/104000/104059-New-York.jpg',
  },
  {
    id: '2',
    name: 'City 2',
    image: 'https://example.com/city2.jpg', // Replace with your image URL
  },
  {
    id: '3',
    name: 'City 3',
    image: 'https://example.com/city3.jpg', // Replace with your image URL
  },
  {
    id: '4',
    name: 'City 4',
    image: 'https://example.com/city4.jpg', // Replace with your image URL
  },
];

const renderItem = ({item, navigation}: any) => (
  <Pressable
    className="w-1/2 p-1 rounded-xl "
    onPress={() => navigation.navigate('Details', {item})}>
    <Animated.View className="rounded-xl bg-zinc-300">
      <Image source={{uri: item.image}} className="w-full h-40 rounded-t-xl" />
      <View className="bg-white rounded-b-xl">
        <Text className="text-center p-2 font-semibold text-black">
          {item.name}
        </Text>
      </View>
    </Animated.View>
  </Pressable>
);

export default function HomeScreen({navigation}: any) {
  const sharedValue = useSharedValue(0);

  return (
    <SafeAreaView>
      <FlatList
        data={citiesData}
        renderItem={({item}) => renderItem({item, navigation})}
        keyExtractor={item => item.name}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
