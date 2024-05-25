import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Card7 = () => {
  const handleNumberPress = number => {
    console.log(number + ' button pressed');
  };

  const handleDecimalPress = () => {
    console.log('Decimal button pressed');
  };

  const handleEqualsPress = () => {
    console.log('Equals button pressed');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <TouchableOpacity onPress={() => handleNumberPress(0)}>
          <View
            style={{
              backgroundColor: '#ff95a3',
              height: 75,
              width: 75,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 23,
                fontWeight: 'bold',
              }}>
              0
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDecimalPress}>
          <View
            style={{
              backgroundColor: '#ff95a3',
              height: 75,
              width: 75,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 23,
                fontWeight: 'bold',
              }}>
              .
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEqualsPress}>
          <View
            style={{
              backgroundColor: '#dabaff',
              height: 75,
              width: 180,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 23,
                fontWeight: 'bold',
              }}>
              =
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card7;
