import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
const App =()=> {
  const apiKey="3ae5f8d1c9304224add529837e072e4e";
  // apiKey=process.env.REACT_APP_API_KEY;
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  apiKey={apiKey}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }

export default App;