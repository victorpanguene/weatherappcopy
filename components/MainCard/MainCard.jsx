import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainCard = (props) => {
  const Icon = () => {
    if (props.icon == 'morning') {
      return (
        <Ionicons
          name="ios-sunny"
          style={{ marginTop: '30%' }}
          size={40}
          color={'white'}
        />
      );
    }
    if (props.icon == 'afternoon') {
      return (
        <Ionicons
          name="ios-moon-sharp"
          style={{ marginTop: '30%' }}
          size={40}
          color={'white'}
        />
      );
    }
    if (props.icon == 'night') {
      return (
        <Ionicons
          name="partly-sunny-sharp"
          style={{ marginTop: '30%' }}
          size={40}
          color={'white'}
        />
      );
    }
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: props.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 24,
      margin: 10,
      height: 'auto',
      padding: 20,
      width: '25%',
    },
    cardIcon: {
      marginTop: 55,
      color: 'white',
    },
    cardTitle: {
      color: 'white',
    },
    temperatureValue: {
      color: 'white',
      textAlign: 'center',
      fontSize: 22,
      marginTop: '30%',
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Icon />
      <Text style={styles.temperatureValue}>{props.temperature}º</Text>
    </View>
  );
};

export default MainCard;
