import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
    onPress={() => navigation.navigate('Test', {item})}>
    <View className="rounded-lg bg-white">
      <Image source={{uri: item.image}} className="w-full h-40 rounded-t-xl" />
      <Text className="text-center p-2 font-semibold text-black bg-red-400">
        {item.name}
      </Text>
    </View>
  </Pressable>
);

export default function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView>
      <FlatList
        data={citiesData}
        renderItem={({item}) => renderItem({item, navigation})}
        keyExtractor={item => item.name}
        numColumns={2}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Test')}>
        <Text>Test</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
