import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setprogress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;

  const setProgress = (progress) => {
    setprogress(progress);
  };
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar progress={progress} color="#f11946" />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                country="us"
                category="general"
                pageSize={3}
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                country="us"
                category="general"
                pageSize={3}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                country="us"
                category="sports"
                pageSize={3}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                country="us"
                category="business"
                pageSize={3}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                country="us"
                category="entertainment"
                pageSize={3}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                country="us"
                category="health"
                pageSize={3}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                country="us"
                category="science"
                pageSize={3}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                country="us"
                category="technology"
                pageSize={3}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
