import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button } from 'react-native';
import Card from './Components/Card';
import axios from 'axios';

function HomeScreen  ({navigation}) {
  const [list, setList] = useState('');
  const baseURL = 'https://jsonplaceholder.typicode.com/photos';
  const renderCard = ({item}) => (
    <Card atr={item} onPress={() => navigation.navigate('Detail')} />
  );
  axios
    .get(`${baseURL}`)
    .then(function (response) {
      console.log(response.data[0]);
      setList(response.data);
    })
    .catch(function (error) {
      console.log(`${error} Bir Hata Oluştu`);
    });


  return (
    <View style={styles.sacffold}>
      {/* <Button title="tıkla" onPress={()=>navigation.navigate("Detail")} /> */}
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderCard}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  sacffold: {
    flex: 1,
    backgroundColor: '#A6D1E6',
  },
});

export default HomeScreen;