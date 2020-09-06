import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native'
import Spinner from '../Spinner'
import styles from './styles'
import props from './props';

const Button=({
  containerStyle,
  disabledStyle,
  buttonStyle,
  titleStyle,
  loadingStyle,
  title,
  onPress,
  loading,
  loadingColor,
  loadingSize,
  rounded,
  disabled,
  buttonColor,
  buttonSize,
  titleColor,
  titleSize,
  activeOpacity
}) => {

  const buttonStyles=styles.button(buttonColor,buttonSize,rounded,disabled,disabledStyle,buttonStyle)
  return (
    <View style={styles.root(containerStyle)}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        disabled={disabled}
        style={buttonStyles}
        onPress={onPress}
      >
        {loading?
          <Spinner
            containerStyle={loadingStyle}
            color={loadingColor}
            size={loadingSize}
          />
          :
          <Text style={styles.title(titleColor,titleSize,titleStyle)}>
            {title}
          </Text>
        }
      </TouchableOpacity>
    </View>
  )
}

export default Button;
props(Button)

