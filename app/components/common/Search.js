import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

var api = require("../../utils/API.js");

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            limit: 5,
            startYear: "",
            endYear: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.updateLimit = this.updateLimit.bind(this);
        this.updateStartYear = this.updateStartYear.bind(this);
        this.updateEndYear = this.updateEndYear.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        //var inputs = $("#searchBox").serializeArray();

        var searchTerm = document.getElementsByName("searchTerm")[0].value;
        var limit = document.getElementsByName("retrieveNumber")[0].value;
        var startYear = document.getElementsByName("startYear")[0].value;
        var endYear = document.getElementsByName("endYear")[0].value;

        this.props.setSearch(searchTerm, limit, startYear, endYear);
        this.setState({
            searchTerm: searchTerm,
            limit: limit,
            startYear: startYear,
            endYear: endYear
        });

        if (searchTerm) {
            api.getNyTimesArticles(searchTerm, startYear, endYear).then((response) => {

                var returns = [];
                for (var i = 0; i < limit && i < response.data.response.docs.length; ++i)
                    returns.push(response.data.response.docs[i]);

                this.props.setResults(returns);
            });
        }
    }

    updateSearchTerm(event) {
        this.setState({ searchTerm: event.target.value });
    }
    updateLimit(event) {
        this.setState({ limit: event.target.value });
    }
    updateStartYear(event) {
        this.setState({ startYear: event.target.value });
    }
    updateEndYear(event) {
        this.setState({ endYear: event.target.value });
    }
    clearSearch(event) {
        event.preventDefault();
        var newState = {
            searchTerm: "",
            limit: 5,
            startYear: "",
            endYear: "",
            searchResults: []
        };
        this.setState(newState);
        this.props.clearSearch();
    }


    render() {
        return (
            <div className="panel panel-primary">

                <div className="panel-heading panelBack">
                    <h8> Search </h8>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit} id="searchBox">
                        <div className="form-group">
                            <label htmlFor="searchTerm">Search: </label>
                            <input type="text" className="form-control" name="searchTerm" placeholder="Enter what you're searching for here" value={this.state.searchTerm} onChange={this.updateSearchTerm} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="retrieveNumber">Number of Records to Retrieve</label>
                            <select className="form-control" name="retrieveNumber" value={this.state.limit} onChange={this.updateLimit}>
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startYear">Start Year (Optional)</label>
                            <input type="text" className="form-control" name="startYear" placeholder="" value={this.state.startYear} onChange={this.updateStartYear} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endYear">End Year (Optional)</label>
                            <input type="text" className="form-control" name="endYear" placeholder="" value={this.state.endYear} onChange={this.updateEndYear} />
                        </div>
                        <button type="submit" id="searchButton" className="btn btn-default">Search</button>
                        <button id="clearButton" style={styles.clearButtonStyle} className="btn btn-danger" onClick={this.clearSearch}>Clear</button>
                        <Link to="/"><button className="btn btn-success" style={styles.clearButtonStyle}>Results</button></Link>
                        <Link to="/saved"><button className="btn btn-warning" style={styles.clearButtonStyle}>Saved Articles</button></Link>
                        
                    </form>
                </div>
            </div>
        )
    }
}

const styles = {
    clearButtonStyle: {
        marginLeft: 10
    }
}

//     render() {
//         return (
//             <div className="panel panel-default">
//                 <div className="panel-heading">
//                     <h3 className="panel-title"><span className="glyphicon glyphicon-modal-window"> </span>Search Parameters</h3>
//                 </div>
//             </div>
//         )
//     }
// }

export default Search;