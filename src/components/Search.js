import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  menuButton: {
    width: "500px"
  }
});

// Finally, inject the stylesheet into the component.

// You can also export the component with
// export default injectSheet(styles)(Button)

class search extends React.Component {
  render() {
    const { classes } = this.props;
    const inputProps = {
      step: 500
    };
    return (
      <TextField
        id="time"
        label="search for video"
        type="text"
        inputProps={inputProps}
        margin="normal"
        className={classes.menuButton}
      />
    );
  }
}

export default withStyles(styles)(search);
