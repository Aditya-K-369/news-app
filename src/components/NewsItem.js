import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, news } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              position: "absolute",
              justifyContent: "flex-end",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{news}</span>
          </div>

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
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
            <a href={newsUrl} target="__blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;