import React from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Volunteer from "./components/Volunteer";

import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Volunteer />

      <Footer />
    </>
  );
}

export default App;
