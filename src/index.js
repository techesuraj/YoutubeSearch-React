import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Search from "./components/Search";
import VideoList from "./components/VideoList";
import YTSearch from "youtube-api-search";

import "./styles.css";
const API_KEY = "AIzaSyDYq9wjkZ3c9BSHrzwGG1EXrZ28cdqyG5k";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: "Surfboards" }, videos => {
      this.setState({
        videos: videos
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Search />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
