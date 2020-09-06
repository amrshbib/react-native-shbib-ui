import React from 'react';
import { View,Image,Text } from 'react-native'
import styles from './styles'
import props from './props';

const Avatar=({
  source,
  containerStyle,
  avatarStyle,
  avatarSize,
  title,
  titleStyle,
  titleSize,
  titleColor
}) => {
  return (
    <View style={styles.root(containerStyle)}>
      <View style={styles.avatarContent(avatarSize,avatarStyle)}>
        {!!source&&
          <Image source={source} style={styles.avatar(avatarSize)} />
        }
        {(!!title)&&
          <Text style={styles.title(titleSize,titleColor,titleStyle)}>{title}</Text>
        }
      </View>
    </View>
  )
}

export default Avatar
props(Avatar)

