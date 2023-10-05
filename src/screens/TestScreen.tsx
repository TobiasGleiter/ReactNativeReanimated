import React from 'react';
import {Image, Text, View} from 'react-native';

const TestScreen = ({route}: any) => {
  const {item} = route.params;

  return (
    <View>
      <Image source={{uri: item.image}} style={{width: '100%', height: 200}} />
      <Text>{item.name}</Text>
      {/* Access other details about the city from the 'item' object here */}
    </View>
  );
};

export default TestScreen;
