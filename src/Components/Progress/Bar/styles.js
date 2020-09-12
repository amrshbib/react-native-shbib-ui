import { Dimensions } from '../../../Theme';
export default {
    root: (styles) => ({
        justifyContent: 'center',
        alignItems: 'center',
        ...styles,
    }),
    progressContent: (color,width,height,styles) => ({
        borderRadius: Dimensions.width*0.1,
        backgroundColor: color,
        width: width,
        height: height,
        ...styles
    }),
    progress: (color,width,value,styles) => ({
        borderRadius: Dimensions.width*0.1,
        backgroundColor: color,
        width: value*width/100,
        height: '100%',
        ...styles
    })
};
