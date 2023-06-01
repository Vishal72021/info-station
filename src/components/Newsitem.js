import React from "react";

const Newsitem = (props) => {
    let { title, description, imageurl, newsurl, author, publishedat } =
      props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
        <span className="badge rounded-pill text-bg-dark">{props.source}</span>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}....</p>
          <a
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-info"
          >
            Read More
          </a>
        </div>
        <p className="card-text">
          <small className="text-muted">
            By {author} on {new Date(publishedat).toUTCString()}
          </small>
        </p>
      </div>
    );
  }

export default Newsitem
