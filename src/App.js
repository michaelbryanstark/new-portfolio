import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from './components/Footer';
import Test from './components/Test';

export default function App() {
  return (
    <main className="text-gray-600 bg-[#061624] body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />

          <Route exact to='/test' element={<Test />}></Route>
        
      <Footer />
    </main>
  );
}
