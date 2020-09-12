import { Dimensions,Font } from '../../Theme';
const { width,height }=Dimensions;

export default {
  root: {
    padding: 10,
  },

  image1: () => ({
    width: width*0.82,
    height: height*0.2,
  }),

  mediaGridContent2: () => ({
    flexDirection: 'row',
  }),
  image21: () => ({
    marginRight: width*0.01,
    width: width*0.4,
    height: height*0.2,
  }),
  image22: () => ({
    marginLeft: width*0.01,
    width: width*0.4,
    height: height*0.2,
  }),

  mediaGridContent3: () => ({
    flexDirection: 'row',
  }),
  image31: () => ({
    marginRight: width*0.01,
    width: width*0.4,
    height: height*0.2,
  }),
  mediaGridSection: () => ({
    flexDirection: 'column',
    marginLeft: width*0.01,
  }),
  image32: () => ({
    width: width*0.4,
    height: height*0.095,
    marginBottom: height*0.005,
  }),
  image33: () => ({
    marginTop: height*0.005,
    height: height*0.095,
    width: width*0.4
  }),
  imagePlaceholder: (length) => ({
    ...(length>3&&{
      backgroundColor: 'rgba(0,0,0,.4)'
    }),
    height: height*0.095,
    justifyContent: 'center',
  }),
  textPlaceholder: () => ({
    alignSelf: 'center',
    position: 'absolute',
    color: 'white',
    fontSize: Font.size[30],
    fontWeight: '600',
  })
};
