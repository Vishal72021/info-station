// import PropTypes from 'prop-types'
import React from "react";
import loading from "./loadinggiphy.gif";

const Spinner = () => {
    return (
      <div className="d-flex justify-content-center my-3">
        <img src={loading} alt="loading" height={"100px"} width={"100px"}/>
      </div>
    );
  }

export default Spinner
