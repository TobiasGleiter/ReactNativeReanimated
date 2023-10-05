import React from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

const citiesData = [
  {
    id: '1',
    name: 'New York',
    description:
      "New York, often referred to as The Big Apple, is a dynamic and iconic metropolis located on the northeastern coast of the United States. This bustling city is a global hub of culture, finance, fashion, and art. From the soaring skyscrapers of Manhattan to the diverse neighborhoods of Brooklyn, New York offers a rich tapestry of experiences. Visitors can explore world-famous landmarks like Times Square, Central Park, and the Statue of Liberty, savor cuisine from around the world, catch a Broadway show, and immerse themselves in the city's unique energy. New York's vibrant mix of cultures and its constant buzz make it a city that never sleeps, always offering something new and exciting to discover.",
    image:
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/104000/104059-New-York.jpg',
  },
  {
    id: '2',
    name: 'New York',
    description:
      "New York, often referred to as The Big Apple, is a dynamic and iconic metropolis located on the northeastern coast of the United States. This bustling city is a global hub of culture, finance, fashion, and art. From the soaring skyscrapers of Manhattan to the diverse neighborhoods of Brooklyn, New York offers a rich tapestry of experiences. Visitors can explore world-famous landmarks like Times Square, Central Park, and the Statue of Liberty, savor cuisine from around the world, catch a Broadway show, and immerse themselves in the city's unique energy. New York's vibrant mix of cultures and its constant buzz make it a city that never sleeps, always offering something new and exciting to discover.",
    image:
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/104000/104059-New-York.jpg',
  },
];

const renderItem = ({item, navigation}: any) => (
  <Pressable
    className="w-1/2 p-1 rounded-xl "
    onPress={() => navigation.navigate('Details', {item})}>
    <View className="rounded-xl bg-zinc-300">
      <Animated.Image
        sharedTransitionTag={`image-${item.id}`}
        source={{uri: item.image}}
        className="w-full h-40 rounded-t-xl"
      />
      <View className="bg-white rounded-b-xl">
        <Text className="text-center p-2 font-semibold text-black">
          {item.name}
        </Text>
      </View>
    </View>
  </Pressable>
);

export default function HomeScreen({navigation}: any) {
  const sharedValue = useSharedValue(0);

  return (
    <SafeAreaView>
      <FlatList
        data={citiesData}
        renderItem={({item}) => renderItem({item, navigation})}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
