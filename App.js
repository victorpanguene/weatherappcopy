import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainCard from './components/MainCard/MainCard';
import InfoCard from './components/MainCard/InfoCard';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState(40);
  const [location, setLocation] = useState('Maputo');

  /* === STYLES === */
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#F2F2F2',
      alignItems: 'center',
    },
    refreshButton: {
      position: 'absolute',
      marginTop: 50,
      marginLeft: 20,
      alignSelf: 'flex-start',
    },
    temperature: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureValue: {
      color: darkTheme ? '#E0E0E0' : '#000000',
      fontSize: 40,
    },
    cardView: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      color: darkTheme ? 'white' : 'black',
    },
    info: {
      marginTop: '5%',
      alignItems: 'center',
      backgroundColor: darkTheme ? '#383E55' : 'white',
      padding: 20,
      borderRadius: 20,
      width: '80%',
      height: 'auto',
    },
    infoText: {
      color: darkTheme ? '#E0E0E0' : 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    infoCards: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
        <Ionicons
          name="ios-refresh"
          size={24}
          color={darkTheme ? 'white' : '#000000'}
          styles={styles.refreshButton}
        />
      </TouchableOpacity>

      <Ionicons
        name="ios-sunny"
        style={{ marginTop: 50 }}
        size={40}
        color="orange"
      />
      <View style={styles.temperature}>
        <Text style={styles.temperatureValue}> {currentTemperature} </Text>
        <Text style={[styles.temperatureValue, { fontSize: 20 }]}> ºC </Text>
      </View>

      <View style={styles.cardView}>
        <MainCard
          title={'Manhã'}
          backgroundColor={darkTheme ? '#FF873D' : '#cc6E30'}
          icon={'morning'}
          temperature={45}
        />
        <MainCard
          title={'Tarde'}
          backgroundColor={darkTheme ? '#D29600' : '#FCC63F'}
          icon={'night'}
          temperature={32}
        />
        <MainCard
          title={'Noite'}
          backgroundColor={darkTheme ? '#008081' : '#38B7B8'}
          icon={'afternoon'}
          temperature={23}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>Informação adicional</Text>
        <View style={styles.infoCards}>
          <InfoCard title={'Vento'} value={'45 Km/h'} />
          <InfoCard title={'Vento'} value={'45 Km/h'} />
          <InfoCard title={'Vento'} value={'45 Km/h'} />
          <InfoCard title={'Vento'} value={'45 Km/h'} />
        </View>
      </View>
    </View>
  );
};
export default App;
