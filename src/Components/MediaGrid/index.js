
import React from "react";
import { View,Image,ImageBackground,Text } from "react-native";
import styles from "./styles";
import { Font } from "../../Theme";

const MediaGrid=({
  containerStyle,
  media
}) => {
  return (
    <View style={containerStyle}>
      {media.length==1&&
        <Image source={media[0]} style={styles.image1()} />
      }
      {media.length==2&&
        <View style={styles.mediaGridContent2()}>
          <Image source={media[0]} style={styles.image21()} />
          <Image source={media[1]} style={styles.image22()} />
        </View>
      }
      {media.length>=3&&
        <View style={styles.mediaGridContent3()}>
          <Image source={media[0]} style={styles.image31()} />
          <View style={styles.mediaGridSection()}>
            <Image source={media[1]} style={styles.image32()} />
            <ImageBackground
              source={media[2]}
              style={styles.image33()}>
              <View style={styles.imagePlaceholder(media.length)}>
                {media.length>3&&
                  <Text style={styles.textPlaceholder()}>
                    +{media.length-3}
                  </Text>
                }
              </View>
            </ImageBackground>
          </View>
        </View>
      }
    </View>
  )
}

export default MediaGrid
props(MediaGrid)

