import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/home/home";
import About from "./components/About/about";
import Works from "./components/Works/works";
import Services from "./components/Services/services";
import Testimonial from "./components/Testimonial/testimonial";
import Contact from "./components/Contact/contact";
import Blog from "./components/Testimonial/Blog/blog";




function App() {
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
    </head>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
       <Route path='/works' element={<Works/>} />
      <Route path='/services' element={<Services/>} />
       <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/contact' element={<Contact/>} />
         <Route path='/blog' element={<Blog/>} />
      
      
     </Routes>

    


  
  
      
    </>
  );
}

export default App;

