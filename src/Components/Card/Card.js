import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Card.styles';

const Card = props =>{
    return (
      <View style={styles.container}>
        <Image style={styles.leading} source={{uri: props.atr.url}} />
        <View style={styles.column}>
          <Text style={styles.title}>{props.atr.title}</Text>
        </View>
        <Image style={styles.trailing} source={{uri: props.atr.thumbnailUrl}} />
      </View>
    );
};

export default Card;