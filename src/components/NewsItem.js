import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source, bg } =
    props;
  return (
    <div className="my-3" >
      <div className="card" style={{backgroundColor:'#0f0f0f',color:'#fff'}}>
        <span
          className={`position-absolute top-0 translate-middle badge rounded-pill bg-${bg}`}
          style={{ left: "90%", zindex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://c.ndtvimg.com/2023-01/fc6h7gjk_influencer-generic-social-media-generic-instagram-generic-pixabay_625x300_21_January_23.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
