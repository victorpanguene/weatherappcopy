import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const InfoCard = (props) => {
  const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
      margin: 15,
      minWidth: 100,
      backgroundColor: '#242635',
      borderRadius: 5,
      padding: 12,
    },
    text: {
      color: '#E8E8E8',
      margin: 5,
      fontSize: 18,
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.text}> {props.title} </Text>
      <Text style={[styles.text, { color: '#D3D3D3' }]}> {props.value}</Text>
    </View>
  );
};

export default InfoCard;
