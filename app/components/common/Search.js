import React, { Component } from "react";

class Search extends Component {


    render() {
        return (
            <div className="panel panel-primary">
                {/*<!-- Search Paramemters Box -->*/}
                <div className="panel-heading panelBack">
                    <span className="glyphicon glyphicon-th-list"></span><h8> Search Parameters </h8>
                </div>
                <div className="panel-body">
                    <form  id="searchBox">
                        <div className="form-group">
                            <label htmlFor="searchTerm">Search Term</label>
                            <input type="text" className="form-control" name="searchTerm" placeholder="Search anything"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="retrieveNumber">Number of Records to Retrieve</label>
                            <select className="form-control" name="retrieveNumber" >
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startYear">Start Year (Optional)</label>
                            <input type="text" className="form-control" name="startYear" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endYear">End Year (Optional)</label>
                            <input type="text" className="form-control" name="endYear" placeholder="" />
                        </div>
                        <button type="submit" id="searchButton" className="btn btn-default">Search</button>
                        <button id="clearButton" className="btn btn-danger">Clear Results</button>
                    </form>
                </div>
            </div>
        )
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