import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';
import { Colors } from '../../Theme';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    data: PropTypes.arrayOf(PropTypes.object),
    renderItem: PropTypes.elementType,
    onScroll: PropTypes.func,
    activeDotColor: PropTypes.string,
    inActiveDotColor: PropTypes.string,
    initIndex: PropTypes.number
  };
  defaultProps={
    data: [],
    activeDotColor: Colors.grey[1],
    activeDotColor: Colors.primary[1],
    initIndex: 0
  };
  PropsInit(Component,propTypes,defaultProps)
}
