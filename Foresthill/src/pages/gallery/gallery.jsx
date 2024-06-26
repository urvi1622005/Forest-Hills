import React from "react";
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './gallery.css';
import Strip from '../Home/Strip.jsx';

// Ensure these paths are correct
import restaurant1 from '../../assets/Gallery/Restaurant/1.jpeg';
import restaurant2 from '../../assets/Gallery/Restaurant/2.jpeg';
import restaurant3 from '../../assets/Gallery/Restaurant/3.jpeg';
import restaurant4 from '../../assets/Gallery/Restaurant/4.jpeg';

import room1 from '../../assets/Gallery/rooms/1.jpeg';
import room2 from '../../assets/Gallery/rooms/2.jpeg';
import room3 from '../../assets/Gallery/rooms/3.jpeg';
import room4 from '../../assets/Gallery/rooms/4.jpeg';

import nature1 from '../../assets/Gallery/Nature/1.jpeg';
import nature2 from '../../assets/Gallery/Nature/2.jpeg';
import nature3 from '../../assets/Gallery/Nature/3.jpeg';
import nature4 from '../../assets/Gallery/Nature/4.jpeg';

import pick1 from '../../assets/Gallery/picks/1.jpeg';
import pick2 from '../../assets/Gallery/picks/2.jpeg';
import pick3 from '../../assets/Gallery/picks/3.jpeg';
import pick4 from '../../assets/Gallery/picks/4.jpeg';

function Gallery() {
    return (
        <>
            <div className='navbar1'>
                <Tabs position='relative' variant='unstyled'>
                    <TabList>
                        <Tab as={Link} to="/" className="tab-item">
                            <FaHome />
                            Home
                        </Tab>
                        <Tab as={Link} to="/restaurant" className="tab-item">
                            <FaUtensils />
                            Restaurants
                        </Tab>
                        <Tab as={Link} to="/rooms" className="tab-item">
                            <FaBed />
                            Rooms
                        </Tab>
                        <Tab as={Link} to="/gallery" className="tab-item">
                            <FaImages />
                            Gallery
                        </Tab>
                        <Tab as={Link} to="/about" className="tab-item">
                            <FaInfoCircle />
                            About
                        </Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='green.500' borderRadius='1px' />
                </Tabs>
            </div>

            <div className='resttax'>Captured Tranquillity</div>
            <div className='nobold'>A Pictorial Symphony of Forest Hill&apos;s Natural Elegance</div>

            <div className="boldtext1">Restaurant</div>
            <div className="restlastimg">
                <img className="gallery-image" src={restaurant1} alt="Restaurant 1" />
                <img className="gallery-image" src={restaurant2} alt="Restaurant 2" />
                <img className="gallery-image" src={restaurant3} alt="Restaurant 3" />
                <img className="gallery-image" src={restaurant4} alt="Restaurant 4" />
            </div>

            <div className="boldtext1">Rooms</div>
            <div className="restlastimg">
                <img className="gallery-image" src={room1} alt="Room 1" />
                <img className="gallery-image" src={room2} alt="Room 2" />
                <img className="gallery-image" src={room3} alt="Room 3" />
                <img className="gallery-image" src={room4} alt="Room 4" />
            </div>

            <div className="boldtext1">Scenic Nature</div>
            <div className="restlastimg">
                <img className="gallery-image" src={nature1} alt="Nature 1" />
                <img className="gallery-image" src={nature2} alt="Nature 2" />
                <img className="gallery-image" src={nature3} alt="Nature 3" />
                <img className="gallery-image" src={nature4} alt="Nature 4" />
            </div>

            <div className="boldtext1">Fresh Picks Corner</div>
            <div className="restlastimg">
                <img className="gallery-image" src={pick1} alt="Pick 1" />
                <img className="gallery-image" src={pick2} alt="Pick 2" />
                <img className="gallery-image" src={pick3} alt="Pick 3" />
                <img className="gallery-image" src={pick4} alt="Pick 4" />
            </div>
            <Strip />
        </>
    );
}

export default Gallery;
