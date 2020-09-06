import { Helper } from "../../Theme";
export default {
  root: (style) => ({
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  }),
  headerWrap: (size,color,style) => ({
    width: '100%',
    height: size+Helper.getStatusBarHeight(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    ...Helper.shadow[1],
    ...style,
  }),
  headerContent: (size) => ({
    height: size,
    width: '100%',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
  }),
  headerItem: (dir) => ({
    ...(dir=='left'&&{
      left: 15
    }),
    ...(dir=='right'&&{
      right: 15
    }),
    ...(dir=='center'&&{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }),
    alignSelf: 'center',
    position: 'absolute'
  })

}