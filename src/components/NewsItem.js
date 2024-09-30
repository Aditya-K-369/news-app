import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, news } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>
              {news}
              <span className="visually-hidden">unread messages</span>
            </span>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://pngimg.com/uploads/smiley/smiley_PNG43.png"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  By {author? author:"Unknown"} on {new Date(date).toGMTString()}
                </small>
              </div>
              <a
                href={newsUrl}
                target="__blank"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
