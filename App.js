import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainCard from './components/MainCard/MainCard';
import InfoCard from './components/MainCard/InfoCard';
import * as Location from 'expo-location';
import { useEffect } from 'react';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState(40);
  const [location, setLocation] = useState('Maputo');
  const [currentHour, setCurrentHour] = useState('14:54 AM');

  const [wind, setWind] = useState(60);
  const [humidity, setHumidity] = useState('50');
  const [minTemp, setMinTemp] = useState(15);
  const [maxTemp, setMaxTemp] = useState(28);

  const [locationCoords, setLocationCoords] = useState({});

  const setTheme = () => (darkTheme ? setDarkTheme(false) : setDarkTheme(true));

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
      marginTop: '3%',
      alignItems: 'center',
      backgroundColor: darkTheme ? '#383E55' : 'white',
      padding: 20,
      borderRadius: 20,
      width: '80%',
      height: 'auto',
    },
    infoText: {
      color: darkTheme ? '#E0E0E0' : 'black',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      textTransform: 'uppercase',
    },
    infoCards: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    themeButton: {
      margin: 10,
      marginLeft: 300,

      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    squareButton: {
      backgroundColor: darkTheme ? '#F2F2F2' : '#8F8F8F',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,
    },
    circleButton: {
      backgroundColor: darkTheme ? '#232634' : '#F2F2F2',
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      justifyContent: 'center',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50,
    },
    setThemeInfoCard: {
      backgroundColor: darkTheme ? '#242635' : 'red',
    },
  });

  /* === API CCONSUMING === */
  const getCurrentLocation = async function () {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg(`Sem premissão, ${status}`);
    } else {
      let location = await Location.getCurrentPositionAsync({});
      await setLocationCoords(location.coords);
      console.log(location.coords);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

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

      <Text
        style={[
          styles.temperatureText,
          { fontSize: 14 },
          { color: darkTheme ? 'white' : '#000000' },
        ]}
      >
        {location}, {currentHour}
      </Text>

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
          <InfoCard title={'Vento'} value={wind + ' Km/H'} />
          <InfoCard title={'Humidade'} value={humidity + ' %'} />
          <InfoCard title={'Temp Max'} value={maxTemp + 'ºC'} />
          <InfoCard title={'Temp Min'} value={minTemp + 'ºC'} />
        </View>
      </View>

      <View style={styles.themeButton}>
        <View style={styles.squareButton}>
          <TouchableOpacity style={styles.circleButton} onPress={setTheme} />
        </View>
      </View>
    </View>
  );
};
export default App;
