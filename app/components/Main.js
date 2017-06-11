import React, {Component} from "react";
import Saved from "./common/Saved";
import Search from "./common/Search";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  


  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center" style={styles.jumbotronStyle}>
        <h1 style={styles.textStyle}>New York Times Search</h1>
        </div>
        <Search/>
      </div>
    )
  }
}

const styles = {
  jumbotronStyle: {
    backgroundColor: "#47088e",
    color: "white"
  },
  textStyle: {
    color: "white"
  }
}

export default Main;