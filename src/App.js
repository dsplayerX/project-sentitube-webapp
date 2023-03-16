import Home from "./pages/Home";
import TryItOut from "./pages/TryItOut";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FAQs from "./pages/FAQs";

import { Route, Router, Routes } from "react-router-dom";

// used for easy dev access (will delete from navbar later)
import Results from "./pages/Results";
import MeetTheTeam from "./pages/MeetTheTeam";
import PerCommentResults from "./pages/PerCommentResults";
import ChromeExtension from "./pages/ChromeExtension";

function App() {
  return (
    <div className="App">
      <NavBar />
      <body>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/TryItOut" element={<TryItOut />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/PerCommentResults" element={<PerCommentResults />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/ChromeExtension" element={<ChromeExtension />} />

          <Route
            exact
            path="/PerCommentResults"
            component={<PerCommentResults />}
          />
        </Routes>
        <Routes>
          <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
        </Routes>
      </body>
      <Footer />
    </div>
  );
}

export default App;
