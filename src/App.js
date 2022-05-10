import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Education from "./components/Education";
import WalletCard from "./components/WalletCard";
import Hack from "./components/Hack";
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={

          <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
            <Education />
            <Contact /></div>} />
        <Route path="/101010110" element={<Hack />} />
      </Routes>

    </div>
  );
}

export default App;
