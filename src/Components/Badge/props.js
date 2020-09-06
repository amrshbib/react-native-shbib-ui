import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';
import { Colors } from '../../Theme';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    valueStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    badgeStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    value: PropTypes.string,
    valueSize: PropTypes.number,
    valueColor: PropTypes.string,
    badgeSize: PropTypes.number,
    badgeColor: PropTypes.string,
  };
  defaultProps={
    valueSize: 20,
    valueColor: Colors.white,
    badgeColor: Colors.primary[0],
  };
  PropsInit(Component,propTypes,defaultProps)
}
