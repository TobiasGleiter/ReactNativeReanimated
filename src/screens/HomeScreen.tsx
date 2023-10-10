import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import {getCountries} from '../api';
import card from '../components/card';

export default function HomeScreen({navigation}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (input: string) => {
    if (input.length >= 2) {
      setSearchTerm(input);
    } else if (input.length == 0) {
      setSearchTerm('');
    }
  };

  useEffect(() => {
    // Now you can call getCities from the imported module
    async function fetchData() {
      try {
        const countriesData = await getCountries(searchTerm);
        setData(countriesData);
        //console.log(countriesData);
      } catch (error) {
        // Handle errors here
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchTerm]);

  return (
    <SafeAreaView className="mx-2">
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <View className="flex flex-row items-baseline gap-1 mt-2">
        <Text className="text-3xl font-bold">Find.</Text>
        <Text className="text-3xl">Explore.</Text>
        <Text className="text-3xl">Countries.</Text>
      </View>
      <View className="mt-4" />
      <View className="bg-white m-1 shadow-sm flex flex-row rounded-xl py-2 px-4 items-center">
        <MagnifyingGlassIcon size={25} color={'black'} />
        <TextInput
          onChangeText={handleSearch}
          placeholder="Search Country"
          placeholderTextColor={'lightgray'}
          className="ml-2 mb-1 text-xl text-black w-full"
        />
      </View>
      {isLoading ? (
        <View className="mt-10">
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => card({item, navigation}, index)}
          keyExtractor={(item: any) => item.name}
          numColumns={2}
          className="mt-2 mb-24"
        />
      )}
    </SafeAreaView>
  );
}
