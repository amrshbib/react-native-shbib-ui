import PropTypes from 'prop-types';
import { Colors } from '~/Theme';
import PropsInit from '../../Utils/PropsInit';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    style: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    color: PropTypes.string,
    size: PropTypes.number,
    customHeader: PropTypes.func,
    leftComponent: PropTypes.func,
    centerComponent: PropTypes.func,
    rightComponent: PropTypes.func,
  };
  defaultProps={
    color: Colors.primary[0],
    size: height*0.065
  };
  PropsInit(Component,propTypes,defaultProps)
}
