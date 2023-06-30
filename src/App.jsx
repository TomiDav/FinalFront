import { Link, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Dentist from "./Routes/Dentist";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { ThemeContext } from "./Components/Contexts/ThemeContext";
import { useContext } from "react";

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={theme}>
        <Header/>
        <Routes>
          <Route path="/dentist/:id" element={<Dentist />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/favs" element={<Favs />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
