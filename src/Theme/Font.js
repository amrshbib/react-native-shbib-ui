import { Platform,StatusBar } from "react-native";
import Dimensions from './Dimensions';
width=Dimensions.width
height=Dimensions.height
function ResponsiveSize(percent) {
  const deviceHeight=Platform.OS==='ios'
    ? height-100 // iPhone X style SafeAreaView size in portrait
    :Platform.OS==="android"
      ? height-StatusBar.currentHeight
      :height;

  const heightPercent=(percent*deviceHeight)/100;
  return Math.round(heightPercent);
}



const weight={
  0: '0',
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  6: '600',
  7: '700',
  8: '800',
  9: '900'

}

const size={
  11: ResponsiveSize(1.4),
  12: ResponsiveSize(1.5),
  14: ResponsiveSize(1.7),
  16: ResponsiveSize(2),
  18: ResponsiveSize(2.3),
  20: ResponsiveSize(2.5),
}

export default {
  weight,
  size,
}
