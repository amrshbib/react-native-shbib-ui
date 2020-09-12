import React from "react";
import { View } from "react-native";
import styles from "./styles";
import props from './props'
const Bar=({
    containerStyle,
    style,
    value,
    primaryColor,
    secondaryColor,
    width,
    height
}) => {
    return (
        <View style={styles.root(containerStyle)}>
            <View style={styles.progressContent(secondaryColor,width,height,style)}>
                <View style={styles.progress(primaryColor,width,value,style)} />
            </View>
        </View>
    )
}

export default Bar
props(Bar)