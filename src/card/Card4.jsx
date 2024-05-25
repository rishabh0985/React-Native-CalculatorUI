import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Card4 = () => {
  const handleNumberPress = number => {
    console.log(number + ' button pressed');
  };

  const handleOperatorPress = operator => {
    console.log(operator + ' button pressed');
  };

  return (
    <View
      style={{
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
        <TouchableOpacity onPress={() => handleNumberPress(7)}>
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
              7
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNumberPress(8)}>
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
              8
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNumberPress(9)}>
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
              9
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleOperatorPress('×')}>
          <View
            style={{
              backgroundColor: '#eed2ff',
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
              ×
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card4;
