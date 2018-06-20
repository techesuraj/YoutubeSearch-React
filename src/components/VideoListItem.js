import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  wrapper: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

const videoListItem = props => {
  const { classes } = props;
  const imageUrl = props.video.snippet.thumbnails.high.url;
  const title = props.video.snippet.channelTitle;
  return (
    <div className={classes.wrapper}>
      <Grid container wrap="nowrap" spacing={24}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {props.video.snippet.title}
              </Typography>
              <Typography component="p">
                {props.video.snippet.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

videoListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(videoListItem);
