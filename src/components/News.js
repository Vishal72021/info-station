import React from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatenews = async () => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setprogress(40);
    let newsdata = await data.json();
    props.setprogress(70);
    setArticles(newsdata.articles);
    setTotalResults(newsdata.totalResults);
    setLoading(false);
    props.setprogress(100);
  };
  useEffect(() => {
    document.title = `${capitalise(props.category)} - InfoStation`;
    updatenews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let newsdata = await data.json();
    setArticles(articles.concat(newsdata.articles));
    setTotalResults(newsdata.totalResults);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center my-4">
        InfoStation Top {capitalise(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3 my-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    publishedat={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultpropTypes = { country: "in", pagesize: 4, category: "general" };
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
