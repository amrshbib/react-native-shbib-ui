export default {
  root: (styles) => ({
    ...styles,
  }),
  radioContent: (styles) => ({
    flexDirection: 'row',
    alignItems: 'center',
    ...styles,
  }),
  label: (size,color,styles) => ({
    fontSize: size,
    color: color,
    ...styles,
  }),
  imageRadioButton: (size,color,styles) => ({
    tintColor: color,
    width: size,
    height: size,
    margin: 10,
    ...styles
  })
}