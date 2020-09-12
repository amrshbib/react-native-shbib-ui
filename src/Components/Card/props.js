import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
  };
  defaultProps={
  };
  PropsInit(Component,propTypes,defaultProps)
}
