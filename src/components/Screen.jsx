import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Card from '../card/Card';
import Card2 from '../card/Card2';
import Card3 from '../card/Card3';
import Card4 from '../card/Card4';
import Card5 from '../card/Card5';
import Card6 from '../card/Card6';
import Card7 from '../card/Card7';

const Screen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <Card />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </View>
  );
};

export default Screen;
