import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Card.styles';

const Card = (props, {onPress}) =>{
    
    return (
      
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
        <Image style={styles.leading} source={{uri: props.atr.url}} />
      </TouchableOpacity>
        <View style={styles.column}>
          <Text style={styles.title}>{props.atr.title}</Text>
        </View>
        <Image style={styles.trailing} source={{uri: props.atr.thumbnailUrl}} />
      </View>
    );
};

export default Card;