import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TryItOut from "./pages/TryItOut";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";


// used for easy dev access (will delete from navbar later)
import Results from "./pages/Results";
import PerCommentResults from "./pages/PerCommentResults";
import MeetTheTeam from "./pages/MeetTheTeam";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/TryItOut" element={<TryItOut />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
