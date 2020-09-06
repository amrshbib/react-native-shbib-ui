import React from 'react';
import { View,Text } from 'react-native'
import styles from './styles'
import props from './props';

const Badge=({
  value,
  containerStyle,
  badgeStyle,
  valueStyle,
  badgeSize,
  badgeColor,
  valueColor,
  valueSize
}) => {
  return (
    <View style={styles.root(containerStyle)}>
      <View style={styles.badge(badgeSize,badgeColor,badgeStyle)}>
        {!!value&&
          <Text style={styles.value(valueSize,valueColor,valueStyle)} >
            {value}
          </Text>
        }
      </View>
    </View>
  )
}
export default Badge
props(Badge)




