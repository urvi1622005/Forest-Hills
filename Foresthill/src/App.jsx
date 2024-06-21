import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from "react";
import { ChakraProvider } from '@chakra-ui/react';

import Nav from "./components/navbar/nav";
import Restaurant from './pages/restaurant/restaurant.jsx';
import Carousel from './pages/Home/carousel.jsx';
import MainDescription from './pages/Home/MainDescription.jsx';
import Gallery from './pages/gallery/gallery.jsx';
import About from './pages/about/about.jsx';
import Rooms from "./pages/Rooms/rooms.jsx";

import './App.css'; // Global styles

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="app-container">
          <Nav /> {/* Render Nav */}

          <Routes>
            <Route path="/" element={
              <>
                <Carousel />
                <MainDescription />
              </>
            } />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
