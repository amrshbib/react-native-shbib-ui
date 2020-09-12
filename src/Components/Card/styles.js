import { Helper } from "../../Theme";

export default {
  root: (styles) => ({
    ...styles,
  }),
  cardContent: (styles) => ({
    backgroundColor: '#f5f5f5',
    ...Helper.shadow[3],
    ...styles,
  }),
}