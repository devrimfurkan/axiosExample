import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from './Components/Card';
import axios from 'axios';

function App(){  
    const [list, setList] = useState("");
    const baseURL = 'https://jsonplaceholder.typicode.com/photos';
    const renderCard = ({item}) =>( <Card atr={item} />); 
    axios
      .get(`${baseURL}`)
      .then(function (response) {
        console.log(response.data[0]);
        setList( response.data);
      })
      .catch(function (error) {
        console.log(`${error} Bir Hata Oluştu`);
      });

  return(
    <View style={styles.sacffold}>
      <FlatList
        keyExtractor = {item => item.id}
        data={list}
        renderItem={renderCard}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  sacffold: {
    flex: 1,
    backgroundColor: '#A6D1E6',
  },
});