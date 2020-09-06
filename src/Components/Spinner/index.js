
import React from 'react';
import { View,ActivityIndicator } from 'react-native';
import styles from './styles';
import props from './props';

const Spinner=({
  containerStyle,
  color,
  size
}) => {
  return (
    <View style={styles.root(containerStyle)}>
      <ActivityIndicator
        color={color}
        size={size}
      />
    </View>
  );
};

export default Spinner;
props(Spinner)





