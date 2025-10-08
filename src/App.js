import React, { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsList from "./components/Project";
import Skills from "./components/Skills";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Loader.css"; // Custom loader styles

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container fade-in">
          <div className="loader-content">
            <h1 className="loader-title">Tala Osman</h1>
            <div className="loading-bar">
              <div className="progress"></div>
            </div>
            <p className="loading-text">Loading portfolio...</p>
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
