import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Card3 = () => {
  const handleACPress = () => {
    console.log('AC button pressed');
  };

  const handleCPress = () => {
    console.log('C button pressed');
  };

  const handlePercentPress = () => {
    console.log('% button pressed');
  };

  const handleDividePress = () => {
    console.log('/ button pressed');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 10,
        margin: 7,
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
        <TouchableOpacity onPress={handleACPress}>
          <View
            style={{
              backgroundColor: '#c693ff',
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
              AC
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCPress}>
          <View
            style={{
              backgroundColor: '#c08bff',
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
              C
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePercentPress}>
          <View
            style={{
              backgroundColor: '#dabaff',
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
              %
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDividePress}>
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
              /
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card3;
