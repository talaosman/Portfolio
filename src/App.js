import React, { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Project";
import ProjectsList from "./components/Project";
import Skills from "./components/Skills";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/Loader.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // slightly longer than animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container fade-in">
          <div className="loader-content">
            <div className="loading-bar">
              <div className="progress"></div>
            </div>
            <p className="loading-text">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="app fade-in">
          <GlobalStyle />
          <Header />
          <About />
          <Experience />
          <ProjectsList />
          <Skills />
          <Volunteer />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
