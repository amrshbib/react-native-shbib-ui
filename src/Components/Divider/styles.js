export default {
  root: (styles) => ({
    width: '100%',
    ...styles,
  }),
  divider: (borderWidth,width,color,styles) => ({
    borderBottomWidth: borderWidth,
    width: width,
    borderBottomColor: color,
    ...styles
  }),
};
