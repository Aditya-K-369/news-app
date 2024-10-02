import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  let [articles, setArticles] = useState([]);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [totalResults, setTotalResults] = useState(0);

  const captilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles); 
    setLoading(false);
    setTotalResults(parsedData.totalResults); 
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
     // eslint-disable-next-line 
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className="text-center" style={{ margin: "50px 0px",marginTop:"90px" }}>
        NewsMonkey - Top {captilizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        hasMore={articles.length < totalResults}
        next={fetchMoreData} // Passed fetchMoreData as reference
        dataLength={articles.length}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : "No Title Available"}
                      description={
                        element.description
                          ? element.description
                          : "No Description Available"
                      }
                      newsUrl={element.url}
                      imageUrl={element.urlToImage ? element.urlToImage : ""}
                      author={element.author ? element.author : "Unknown"}
                      date={
                        element.publishedAt
                          ? new Date(element.publishedAt).toDateString()
                          : "Unknown Date"
                      }
                      news={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "science",
};

News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
