import React from "react";
import { View } from 'react-native'
import styles from "./styles";
import props from "./props";

const Divider=({
  containerStyle,
  style,
  color,
  borderWidth,
  width
}) => {
  return (
    <View style={styles.root(containerStyle)} >
      <View style={styles.divider(borderWidth,width,color,style)} />
    </View>
  );
}
export default Divider
props(Divider)

