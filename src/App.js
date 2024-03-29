import Home from "./pages/Home";
import TryItOut from "./pages/TryItOut";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FAQs from "./pages/FAQs";
import TermsOfService from "./pages/TermsOfService";
import BackgroundImage from "./components/BackgroundImage";

import { Route, Routes } from "react-router-dom";

import Results from "./pages/Results";
import MeetTheTeam from "./pages/MeetTheTeam";
import PerCommentResults from "./pages/PerCommentResults";
import ChromeExtension from "./pages/ChromeExtension";
import SentiTubeLogic from "./pages/SentiTubeLogic";
import BlogArticles from "./pages/BlogArticles";
import TryWithCustomText from "./pages/TryWithCustomText";
import ArticleDetails from "./pages/ArticleDetails";
import { articles } from './components/articleData';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <NavBar />
      <body style={{ paddingTop: "20px" }}>
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
          <Route path="/SentiTubeLogic" element={<SentiTubeLogic />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route
            exact
            path="/PerCommentResults"
            component={<PerCommentResults />}
          />
          <Route path="/TryWithCustomText" element={<TryWithCustomText />} />
          <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
          <Route path="/BlogArticles" element={<BlogArticles />} />
          <Route path="/articles/:index" element={<ArticleDetails articles={articles} />} />
        </Routes>
      </body>
      <Footer />
    </div>
  );
}

export default App;
