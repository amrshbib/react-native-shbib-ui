import { Dimensions } from 'react-native';
const { height,width }=Dimensions.get('window');


export default {
  height: (height<width)? width:height,
  width: (width>height)? height:width
};

