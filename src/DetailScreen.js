import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetailScreen () {
  console.log('DetailPage');
    return (
      <View style={styles.scaffold}>
        <Text style={styles.text}>Hello Secon Screen!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  scaffold:{
    flex:1,
  },
  text:{
    alignItems:'center',
  }
});

export default DetailScreen;