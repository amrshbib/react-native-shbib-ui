
import React from 'react';
import { TouchableOpacity,Image,View,Text } from 'react-native';
import styles from './styles';
import props from './props';

const RadioButton=({
  containerStyle,
  checked,
  onPress,
  iconSize,
  iconColor,
  label,
  labelSize,
  labelColor
}) => {
  return (
    <View style={styles.root(containerStyle)}>
      <TouchableOpacity activeOpacity={0.5} style={styles.radioContent()} onPress={onPress}>
        <Image style={styles.imageRadioButton(iconSize,iconColor)}
          source={
            checked?
              require('../../Assets/Images/radio.png')
              :
              require('../../Assets/Images/unRadio.png')
          }
        />
        <Text style={styles.label(labelSize,labelColor)}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
props(RadioButton)

