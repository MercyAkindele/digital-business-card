import React from "react";
import MainSection from "./components/MainSection";
import ProfileImage from "./components/ProfileImage";
import Footer from "./components/Footer";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <div className = "content-container">
        <ProfileImage />
        <MainSection />
        <Footer />
      </div>
      {/* <div className="test-content-container">
        <div className="test-container" id="test-container">
          <p>container 1</p>
          <p>container 1</p>
          <p>container 1</p>
        </div>
        <div className="test-container" id="test-container">
          <p>container 2</p>
          <p>container 2</p>
          <p>container 2</p>
        </div>
        <div className="test-container" id="test-container">
          <p>container 3</p>
          <p>container 3</p>
          <p>container 3</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
