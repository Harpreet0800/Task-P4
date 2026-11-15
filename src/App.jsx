import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Articles from "./Articles";
import Tutorials from "./Tutorials";
import Gallery from "./Gallery";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import "./App.css";
function App() {
  const [user, setUser] = useState(null);
  function handleLogin(userData) {
    setUser(userData);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <Projects />
              <Articles />
              <Tutorials />
              <Gallery />
              <Subscribe />
              <Contact />
            </>}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}/>
        <Route
          path="/register"
          element={<Register />}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
