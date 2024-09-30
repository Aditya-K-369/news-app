import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps={
    country:"us",
    pageSize:5,
    category:"science",
  }
  static propTypes={
    country:PropTypes.string.isRequired,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  captilizeFirstLetter(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `NewsMonkey - ${this.captilizeFirstLetter(this.props.category)}`
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2361d69ee62b4525bef898ef674c8968&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading:false, 
    });
  } 


  async componentDidMount() {
  this.updateNews();
  }

  previousClick = async () => {
    this.setState({page: this.state.page - 1});
  };

  nextClick = async () => {
    if (!this.state.page >= Math.ceil(this.state.totalResults /  this.state.pageSize)) {
      this.setState({page: this.state.page + 1});
      this.updateNews();
    }
  };

  render() {
    return (
      <div className="container my-3 text-center" style={{margin:'50px'}}>
        <h2 className="text-center" style={{margin:'50px 0px'}}>NewsMonkey - Top {this.captilizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ''}
                  description={element.description ? element.description : ''}
                  newsUrl={element.url}
                  imageUrl={element.urlToImage ? element.urlToImage : ''}
                  author={element.author}
                  date = {element.publishedAt}
                  news = {element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.previousClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextClick}
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
