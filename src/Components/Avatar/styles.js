import { Colors } from "../../Theme";

export default {
  root: (styles) => ({
    justifyContent: 'center',
    alignItems: 'center',
    ...styles
  }),
  avatarContent: (size,styles) => ({
    borderRadius: width*0.3,
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    backgroundColor: Colors.grey[4],
    ...styles
  }),
  avatar: (size,styles) => ({
    borderRadius: width*0.3,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    ...styles
  }),
  title: (size,color,styles) => ({
    position: 'absolute',
    color: color,
    fontSize: size,
    ...styles
  })
}