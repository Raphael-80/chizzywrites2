import React from "react";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import About from "./pages/About";

import NotFound from "./components/404";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>


      {/* <Footer /> */}

    </div>
  );
};

export default App;