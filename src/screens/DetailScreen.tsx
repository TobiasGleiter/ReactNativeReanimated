import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {FadeIn, FadeInLeft, FadeInUp} from 'react-native-reanimated';
import {getCountryDetail} from '../api';

const DetailScreen = ({navigation, route}: any) => {
  const {item, gradientColor} = route.params;
  const [data, setData] = useState<any>();

  const handleBack = () => {
    setTimeout(() => navigation.navigate('Home'), 100);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const countryData = await getCountryDetail(item.code);
        //console.log(countryData);
        setData(countryData);
      } catch (error) {
        // Handle errors here
      } finally {
      }
    }

    fetchData();
  }, []);

  return (
    <View className="relative">
      <Pressable
        onPress={handleBack}
        className="absolute top-10 left-2 z-20 py-4 p-4 #bg-red-500 w-fit">
        <Animated.View
          entering={FadeInUp.duration(750)}
          className="flex flex-row p-2 rounded-lg bg-white items-center">
          <ArrowLeftIcon size={24} color="black" />
        </Animated.View>
      </Pressable>
      <ScrollView className="relative h-full">
        <Animated.View className="relative">
          <LinearGradient colors={gradientColor} className="w-full h-[250px]" />
          <Animated.View
            entering={FadeIn.duration(1500)}
            className="absolute mt-4 z-20 w-full h-[250px] justify-center items-center">
            <Text className="text-7xl font-bold">{item.code}</Text>
          </Animated.View>
        </Animated.View>
        <View className="flex gap-4 px-6 pt-2 pb-20">
          <Animated.View
            entering={FadeInLeft.duration(500)}
            className="flex flex-row items-baseline">
            <Text className="text-xl font-bold">{item.name}</Text>
            <Text className="text-xl font-base ml-1">{item.code}</Text>
          </Animated.View>
          {data && data.flagImageUri ? (
            <Animated.View
              entering={FadeIn.duration(1250)}
              className="flex space-y-2">
              <View>
                <Text>Capital</Text>
                <Text className="font-bold text-xl">{data?.capital}</Text>
              </View>
              <View>
                <Text>Calling Code</Text>
                <Text className="font-bold text-xl">{data?.callingCode}</Text>
              </View>
              <View>
                <Text>Currency</Text>
                <View className="font-bold text-xl">
                  {data?.currencyCodes.map((code: string, index: number) => (
                    <Text key={index} className="font-bold text-xl">
                      {code}
                    </Text>
                  ))}
                </View>
              </View>
              <View>
                <Text>Regions</Text>
                <Text className="font-bold text-xl">{data?.numRegions}</Text>
              </View>
            </Animated.View>
          ) : (
            <></>
          )}
        </View>
        {/* data && data.flagImageUri ? (
          <View className="">
            <SvgUri uri={data.flagImageUri} />
          </View>
        ) : (
          <ActivityIndicator /> // Show a loading indicator
        )*/}
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
