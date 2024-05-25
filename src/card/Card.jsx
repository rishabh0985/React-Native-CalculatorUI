import {View, Text} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#b8ffff',
          height: 180,
          margin: 20,
          borderRadius: 10,
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 40,
            textAlign: 'right',
            //   padding: 20,
            margin: 13,
          }}>
          367
        </Text>
        <Text style={{color: 'black', fontSize: 20, margin: 10, opacity: 0.5}}>
          334 + 45 + 12
        </Text>
      </View>
    </View>
  );
};

export default Card;
