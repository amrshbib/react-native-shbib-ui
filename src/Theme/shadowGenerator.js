export default (color, offset, opacity, radius, elevation) => {
  return {
    shadowColor: color,
    shadowOffset: {
      width: offset.width,
      height: offset.height
    },
    shadowOpacity: opacity,
    shadowRadius: radius,

    elevation: elevation
  };
};
