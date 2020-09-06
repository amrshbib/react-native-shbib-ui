
export default {
  root: (styles) => ({
    justifyContent: 'center',
    alignItems: 'center',
    ...styles,
  }),
  button: (color,size,rounded,disabled,disabledStyle,styles) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: size,
    height: size*0.25,
    backgroundColor: color,
    ...(rounded&&{
      borderRadius: width*0.3
    }),
    ...(disabled&&{
      ...disabledStyle
    }),
    ...styles,
  }),
  title: (color,size,styles) => ({
    color: color,
    fontSize: size,
    ...styles
  }),
}