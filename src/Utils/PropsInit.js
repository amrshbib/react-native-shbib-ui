
export default PropsInit=(Component,propsType,defaultProps) => {
  Component.propTypes={
    ...propsType
  };
  Component.defaultProps={
    ...defaultProps
  };
}
