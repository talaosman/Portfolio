import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStyle from "./globalStyles";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsList from "./components/Project";
import Skills from "./components/Skills";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaded = useCallback(() => setLoading(false), []);

  return (
    <>
      {/* Mounted before the loader so it gets the site's fonts and colors. */}
      <GlobalStyle />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onDone={handleLoaded} />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <Header />
            <About />
            <Experience />
            <ProjectsList />
            <Skills />
            <Volunteer />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
