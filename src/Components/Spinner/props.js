import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };
  defaultProps={
    color: '#cccc',
    size: Platform.select({
      android: 20,
      ios: 'small',
    }),
  };
  PropsInit(Component,propTypes,defaultProps)
}
