import React from "react";
import { View } from "react-native";
import styles from './styles'
import props from "./props";

const Card=({
  containerStyle,
  children,
  style
}) => {
  return (
    <View style={styles.root(containerStyle)}>
      <View style={styles.cardContent(style)}>
        {!!children&&children}
      </View>
    </View>
  )
}
export default Card
props(Card)

