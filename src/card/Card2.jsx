import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Card2 = () => {
  const handleRestPress = () => {
    console.log('REST button pressed');
  };

  const handleAdvPress = () => {
    console.log('ADV button pressed');
  };

  return (
    <View
      style={{
        // backgroundColor: 'white',
        height: 60,
        margin: 15,
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        gap: 20,
        marginTop: 1,
        padding: 10,
      }}>
      <TouchableOpacity onPress={handleRestPress}>
        <View
          style={{
            backgroundColor: '#550a3b',
            height: 43,
            width: 75,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
            }}>
            REST.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAdvPress}>
        <View
          style={{
            backgroundColor: '#c7a2fa',
            height: 43,
            width: 75,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
            }}>
            ADV.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card2;
