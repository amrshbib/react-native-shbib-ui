import PropTypes from 'prop-types';
import PropsInit from '../../Utils/PropsInit';
import { Colors } from '../../Theme';
import { ImageSourceType } from '../../Utils/types';

export default props=(Component) => {
  propTypes={
    containerStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    avatarStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    titleStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    source: ImageSourceType,
    avatarSize: PropTypes.number,
    title: PropTypes.string,
    titleSize: PropTypes.number,
    titleColor: PropTypes.string
  };
  defaultProps={
    source: null,
    title: '',
    titleColor: Colors.white,
    avatarSize: 100,
    titleSize: 60
  };
  PropsInit(Component,propTypes,defaultProps)
}
