import PropTypes from 'prop-types';
import PropsInit from '../../../Utils/PropsInit';
import { Colors } from '../../../Theme';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    style: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    value: PropTypes.number,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };
  defaultProps={
    value: 0,
    primaryColor: Colors.primary[0],
    secondaryColor: Colors.primary[1],
    width: 200,
    height: 15,
  };
  PropsInit(Component,propTypes,defaultProps)
}
