import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"general"}
                  country="in"
                  category="general"
                  pagesize={4}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"business"}
                  country="in"
                  category="business"
                  pagesize={4}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"entertainment"}
                  country="in"
                  category="entertainment"
                  pagesize={4}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"general"}
                  country="in"
                  category="general"
                  pagesize={4}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"health"}
                  country="in"
                  category="health"
                  pagesize={4}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"science"}
                  country="in"
                  category="science"
                  pagesize={4}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"sports"}
                  country="in"
                  category="sports"
                  pagesize={4}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setprogress={setProgress}
                  apiKey={apiKey}
                  key={"technology"}
                  country="in"
                  category="technology"
                  pagesize={4}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App
