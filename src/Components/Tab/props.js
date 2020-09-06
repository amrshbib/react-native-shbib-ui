import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    items: PropTypes.array,
    renderTabActive: PropTypes.elementType,
    renderTabNotActive: PropTypes.elementType,
    horizontal: PropTypes.bool,
    scrollEnabled: PropTypes.bool,
    bounces: PropTypes.bool,
  };
  defaultProps={
    items: [],
    horizontal: true,
    scrollEnabled: true,
    bounces: true,
  };
  PropsInit(Component,propTypes,defaultProps)
}
