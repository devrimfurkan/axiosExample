import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Card.styles';

const Card = (props, {onPress}) =>{
    
    return (
        <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.leading} source={{uri: props.atr.url}} />
        <View style={styles.column}>
          <Text style={styles.title}>{props.atr.title}</Text>
        </View>
        <Image style={styles.trailing} source={{uri: props.atr.thumbnailUrl}} />
      </View>
      </TouchableOpacity>
    );
};

export default Card;