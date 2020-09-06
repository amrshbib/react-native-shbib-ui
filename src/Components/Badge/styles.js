
export default {
  root: (styles) => ({
    justifyContent: 'center',
    alignItems: 'center',
    ...styles
  }),
  badge: (size,color,styles) => ({
    borderRadius: width*0.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    ...(size&&{
      width: size,
      height: size,
    }),
    backgroundColor: color,
    ...styles
  }),
  value: (size,color,styles) => ({
    color: color,
    fontSize: size,
    ...styles
  }),
}