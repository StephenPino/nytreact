var axios = require("axios");
var apiKey = "6313697928e84621a759be1347a19091";

// Helper functions
var api = {

  getNyTimesArticles: function(searchTerm, startYear, endYear){
    var baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var params = "?api-key="+apiKey;
    params+="&q="+searchTerm;
    if(startYear)
      params+="&begin_date="+startYear+"0101";
    if(endYear)
      params+="&end_date="+endYear+"1231";

    return axios.get(baseUrl+params);
  },

  saveArticle: function(article) {
    var newArticle = {
      title: article.headline.main,
      section: article.section_name,
      date: article.pub_date,
      url: article.web_url
    };
    newArticle.by = article.byline ? article.byline.original : "No Author";
    
    return axios.post("/api/saved", newArticle);
  },

  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  removeArticle: function(id){
    return axios.delete("/api/saved", {params: {id: id}});
  },
};

module.exports = api;