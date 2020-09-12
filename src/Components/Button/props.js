import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';
import { TouchableOpacity } from 'react-native'
import { Colors,Font } from "../../Theme";

export default props=(Component) => {
  propTypes={
    ...TouchableOpacity.propTypes,
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    buttonStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    titleStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    disabledStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    loadingStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    title: PropTypes.string,
    onPress: PropTypes.func,
    loading: PropTypes.bool,
    loadingColor: PropTypes.string,
    loadingSize: PropTypes.string,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    buttonColor: PropTypes.string,
    buttonSize: PropTypes.number,
    titleColor: PropTypes.string,
    titleSize: PropTypes.number,
    activeOpacity: PropTypes.number,
  };
  defaultProps={
    title: 'Button',
    loading: false,
    loadingColor: Colors.white,
    loadingSize: Platform.select({
      android: 20,
      ios: 'small',
    }),
    disabledStyle: { backgroundColor: Colors.disabled },
    rounded: false,
    disabled: false,
    buttonColor: Colors.primary[0],
    titleColor: Colors.white,
    buttonSize: 120,
    titleSize: Font.size[18],
    activeOpacity: 0.5
  };
  PropsInit(Component,propTypes,defaultProps)
}
