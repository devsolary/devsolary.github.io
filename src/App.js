import Homescreen from "./Homescreen.js"
import "./App.css"
import Header from "./Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";
import Services from "./Services.js"
import About from "./About.js"
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Dev Solary</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Nested component" />
      </Helmet>
      <Header />
      <div className="content">
       <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
       </Routes>
      
      </div>
      
    </div>
  </Router>
  );
}

export default App;
