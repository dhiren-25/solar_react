import React from "react";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Review from "./components/Review";

function App() {
  return (
    <Router>
      <div>
        <Navbar2 />
        <Routes>
        <Route exact path="/" element={<Projects/>} />
        <Route exact path="/projects" element={<Projects/>} />
          
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/products" element={<Blog/>} />
        <Route path="/contact" element={<ContactUs/>} />
        </Routes>
        <Review/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
