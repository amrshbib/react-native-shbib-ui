import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';
import { Colors,Dimensions } from '../../Theme';
const { width,height }=Dimensions
export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    style: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    color: PropTypes.string,
    borderWidth: PropTypes.number,
    width: PropTypes.number,
  };
  defaultProps={
    color: Colors.grey[1],
    borderWidth: 1,
    width: width
  };
  PropsInit(Component,propTypes,defaultProps)
}
