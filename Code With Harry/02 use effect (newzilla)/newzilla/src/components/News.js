import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidMount(){  //this will run after render function
     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f0256dbc786e45958b9d5355b5b0e547&page=1";

     let data = await fetch(url); 
     let parsedData = await data.json();
     this.setState({
      articles: parsedData.articles
     })
  }

  render() {
    return (
      <div className="container">

        <h2>Newzilla: Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div key={element.url} className="col-4">
                <NewsItem
                title={element.title.slice(0, 50)}
                description={element.description? element.description.slice(0, 100) : element.description}
                imgUrl={element.urlToImage}
                url={element.url}
                />
                </div>
        })}

        <div className="d-flex justify-content-between">
        <button type="button" class="btn btn-dark">&larr; Previous</button>
        <button type="button" class="btn btn-dark">Next &rarr;</button>

        </div>
        </div>

      </div>
    );
  }
}

export default News;
