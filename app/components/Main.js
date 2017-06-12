import React, { Component } from "react";
import Saved from "./common/Saved";
import Search from "./common/Search";
import Results from "./common/Results";

var api = require("../utils/API.js");

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      limit: 5,
      startYear: "",
      endYear: "",
      searchResults: [],
      savedArticles: []
    };

    this.setSearch = this.setSearch.bind(this);
    this.setResults = this.setResults.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

  }

    componentDidMount() {
    api.getSavedArticles().then((response) => {
      if (response.data !== this.state.savedArticles) {
        this.setState({ savedArticles: response.data });
      }
    });
  }

  setSearch(term, limit, startYear, endYear) {
    this.setState({
      searchTerm: term,
      limit: limit,
      startYear: startYear,
      endYear: endYear
    });
  }

  setResults(results) {
    this.setState({searchResults: results});
  }

  saveArticle(index) {
    api.saveArticle(this.state.searchResults[index]).then((response) => {
      this.getArticles();
    });
  }

  removeArticle(id) {
    api.removeArticle(id).then((response) => {
      this.getArticles();
    });
  }

  getArticles() {
    api.getSavedArticles().then((response) => {
      this.setState({savedArticles: response.data});
    });
  }

  clearSearch() {
    var newState = {
      searchTerm: "", 
      limit: 5,
      startYear: "",
      endYear: "",
      searchResults: []
    };
    this.setState(newState);
  }



  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center" style={styles.jumbotronStyle}>
          <h1 style={styles.textStyle}>New York Times Searcher</h1>
        </div>
        <Search setSearch={this.setSearch} setResults={this.setResults} clearSearch={this.clearSearch}/>
        <Results passedResults={this.state.searchResults} saveArticle={this.saveArticle}/>
        <Saved savedArticles={this.state.savedArticles} removeArticle={this.removeArticle}/>
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