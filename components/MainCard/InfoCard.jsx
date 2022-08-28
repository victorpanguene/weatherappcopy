import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const InfoCard = (props) => {
  const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
      margin: 5,
      minWidth: 100,
      backgroundColor: '#242635',
      borderRadius: 5,
      padding: 10,
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
      <Text style={[styles.text, { color: '#FFFFFF' }, { fontWeight: 'bold' }]}>
        {props.value}
      </Text>
    </View>
  );
};

export default InfoCard;
