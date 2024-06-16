
import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Restaurant from "./pages/restaurant/Restaurant";
// import Room from "./pages/rooms/Room";
// import Gallery from "./pages/gallery/Gallery";
// import About from "./pages/about/About";
import Nav from "./components/navbar/nav";
// import Navb from "./components/navbar/navb";
import './App.css'; 
import { ChakraProvider } from '@chakra-ui/react';
import Carousel from './pages/Home/carousel.jsx';
// import AboutForest from './pages/Home/AboutForest.jsx';
import MainDescription from "./pages/Home/MainDescription.jsx";
function App() {
  return (
    <>
    <ChakraProvider>
      <Carousel/>
      {/* <AboutForest/> */}
      <MainDescription  />
    </ChakraProvider>
    
      <Nav /> {/* Render Nav or Navb depending on your layout */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<Navb />} /> Use Navb for unknown routes */}
      {/* </Routes> */}
    </>
  );
}
<React/>
 export default App;
// /* Property 1=Frame 1 */

// position: absolute;
// width: 1280px;
// height: 750px;
// left: 20px;
// top: 20px;

