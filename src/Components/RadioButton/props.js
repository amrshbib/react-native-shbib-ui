import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';
import { Colors } from '../../Theme';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    checked: PropTypes.bool,
    onPress: PropTypes.func,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    label: PropTypes.string,
    labelSize: PropTypes.number,
    labelColor: PropTypes.string
  };
  defaultProps={
    iconSize: 30,
    iconColor: Colors.primary[0],
    label: 'label',
    checked: false,
    labelSize: 20,
    labelColor: Colors.primary[0]
  };
  PropsInit(Component,propTypes,defaultProps)
}
