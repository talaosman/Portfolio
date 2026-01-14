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
import "./components/Loader.css"; 
import "./components/ScrollTop.css"; // flash button CSS

function App() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

          {/* Flash scroll button */}
          {showScroll && <div className="scroll-top" onClick={scrollToTop}></div>}
        </div>
      )}
    </>
  );
}

export default App;
