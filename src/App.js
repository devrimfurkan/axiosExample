import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from './Components/Card';
import data from './data';

function App(){
  const [list, setlist] = useState(data);
  const renderCard = ({item}) => <Card atr= {item}/>;
  return(
    <View style={styles.sacffold}>
      <FlatList
        keyExtractor = {item => item._id}
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