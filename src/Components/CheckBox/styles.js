export default {
  root: (styles) => ({
    ...styles,
  }),
  checkContent: (styles) => ({
    flexDirection: 'row',
    alignItems: 'center',
    ...styles,
  }),
  label: (size,color,styles) => ({
    fontSize: size,
    color: color,
    ...styles,
  }),
  imageCheckBox: (size,color,styles) => ({
    tintColor: color,
    width: size,
    height: size,
    margin: 10,
    ...styles
  })
}