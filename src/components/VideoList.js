import React from "react";
import createStyled from "../styleComponents/createStyled";
import VideoListItem from "./VideoListItem";

const Styled = createStyled({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
});

const videoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <Styled>
        {({ classes }) => <VideoListItem key={video.etag} video={video} />}
      </Styled>
    );
  });

  return <ul>{videoItems}</ul>;
};

export default videoList;
