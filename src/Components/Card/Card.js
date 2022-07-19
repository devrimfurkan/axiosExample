import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Card.styles';

const Card = props =>{
    return (
      <View style={styles.container}>
        <Image style={styles.leading} source={{uri: props.atr.picture}} />
        <View style={styles.column}>
          <Text style={styles.title}>{props.atr.name}</Text>
          <Text >{props.atr.company}</Text>
        </View>
        <Image style={styles.trailing} source={{uri: props.atr.picture}} />
      </View>
    );
};

export default Card;