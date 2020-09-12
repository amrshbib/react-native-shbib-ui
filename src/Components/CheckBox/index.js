
import React from 'react';
import { TouchableOpacity,Image,View,Text } from 'react-native';
import styles from './styles';
import props from './props';
const CheckBox=({
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
      <TouchableOpacity style={styles.checkContent()} onPress={onPress}>
        <Image style={styles.imageCheckBox(iconSize,iconColor)}
          source={
            checked?
              require('../../Assets/Images/checkBox.png')
              :
              require('../../Assets/Images/unCheckBox.png')
          }
        />
        <Text style={styles.label(labelSize,labelColor)}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;
props(CheckBox)



