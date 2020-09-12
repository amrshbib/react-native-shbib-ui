import { StyleSheet } from 'react-native'
import { Dimensions } from '../../Theme';
const { width }=Dimensions
export const styles=StyleSheet.create({
  root: (styles) => ({
    ...styles,
  }),
  flatListContainer: (styles) => ({
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    ...styles
  }),
  dotContent: (styles) => ({
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    ...styles,
  }),
  dot: (interval,activeDotColor,inActiveDotColor,styles) => ({
    ...(!interval&&{
      opacity: 0.5,
      color: inActiveDotColor
    }),
    ...(interval&&{
      opacity: 1,
      color: activeDotColor
    }),

    paddingHorizontal: 5,
    fontSize: width*0.1,
    ...styles
  }),
  swiperContnet: () => ({
    width: width

  })

});

export default styles;