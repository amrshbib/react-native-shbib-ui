import { Dimensions } from '../Theme'
import { Platform } from 'react-native';
const { width,height }=Dimensions
export default {
  shadow: {
    0: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    1: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    2: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    3: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    }
  },
  getStatusBarHeight: () => {
    return (
      Platform.OS==='ios'&&
        !Platform.isPad&&
        !Platform.isTVOS&&
        ((height===812||width===812)||(height===896||width===896))
        ? 34:0
    );
  }
}
