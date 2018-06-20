import { withStyles } from "@material-ui/core/styles";

function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return props.children(other);
  }
  return withStyles(styles, options)(Styled);
}

export default createStyled;
