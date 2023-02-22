import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TryItOut from "./pages/TryItOut";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbarnew from "./components/Navbarnew"

import { Route, Router, Routes } from "react-router-dom";


// used for easy dev access (will delete from navbar later)
import Results from "./pages/Results";
import MeetTheTeam from "./pages/MeetTheTeam";

function App() {
  return (
     <div className="App">
       <Navbarnew/>
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/TryItOut" element={<TryItOut />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/About" element={<About/>}/>
       </Routes>





      <Routes>
        <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
      </Routes>


       
      
      
      
      
      
      
      
      
      
      
      {/* <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/TryItOut" element={<TryItOut />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Results" element={<Results />} />

      </Routes>
      <Routes>
        <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
      </Routes> */}
      
    </div>
  );
}

export default App;
