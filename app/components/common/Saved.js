import React, {Component} from "react";

const Saved = (props) => {
  const removeArticle = (event) =>{
    var index = event.target.name;
    props.removeArticle(index);
  }

  return (
    <div className="panel panel-success">
      <div className="panel-heading panelBack">
       <h8>Saved Articles</h8>
      </div>
      <div id="our-results" className="panel-body">
        
        {props.savedArticles.map((article, i) => (
            <div key={i} id={"result_"+(i+1)} className="well">
              <p><h4>{article.title}</h4></p>
              <p><strong>Date Published:</strong> {article.date}</p>
              <a href={article.url} target="_blank" >{article.url}</a>
              <br/>
              <br/>
              <p><strong>Date Saved: </strong> {article.dateSaved}</p>
              <button name={article._id} className="btn btn-primary" onClick={removeArticle}>Remove Article</button> 
            </div>
          ))
        }
          
      </div>
    </div>
  );
}

export default Saved;