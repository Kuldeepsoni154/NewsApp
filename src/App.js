import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App (){
  
  const pageSize = 15;
  const country = "us";
  const apiKey = "b672f7e378404c3b8ef779f52e1fb4ee";
  // const apiKey = "7ecccfaeba114d22a83128260f8a2bae";
  const [progress, setProgress] = useState(0);

  return (
    <div style={{backgroundColor:'#0f0f0f'}}>
      <Router>
        <Navbar/>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
                bg={"success"}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
                bg={"danger"}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
                bg={"success"}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
                bg={"warning"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
                bg={"info"}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
                bg={"secondary"}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
                bg={"primary"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
