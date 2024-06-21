import React from "react";
import { Tabs, TabList, Tab, TabIndicator,require } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import images using require for bundlers like Webpack or proper relative paths if using another setup
const restaurant1 = require('../../assets/gallery/restaurant/1.jpeg');
const restaurant2 = require('../../assets/gallery/restaurant/2.jpeg');
const restaurant3 = require('../../assets/gallery/restaurant/3.jpeg');
const restaurant4 = require('../../assets/gallery/restaurant/4.jpeg');

const room1 = require('../../assets/gallery/rooms/1.jpeg');
const room2 = require('../../assets/gallery/rooms/2.jpeg');
const room3 = require('../../assets/gallery/rooms/3.jpeg');
const room4 = require('../../assets/gallery/rooms/4.jpeg');

const nature1 = require('../../assets/gallery/nature/1.jpeg');
const nature2 = require('../../assets/gallery/nature/2.jpeg');
const nature3 = require('../../assets/gallery/nature/3.jpeg');
const nature4 = require('../../assets/gallery/nature/4.jpeg');

const pick1 = require('../../assets/gallery/picks/1.jpeg');
const pick2 = require('../../assets/gallery/picks/2.jpeg');
const pick3 = require('../../assets/gallery/picks/3.jpeg');
const pick4 = require('../../assets/gallery/picks/4.jpeg');

function GaLLery() {
    return (
        <>
            <div className='navbar1'>
                <Tabs position='relative' variant='unstyled' height={5} width={70}>
                    <TabList>
                        <Tab as={Link} to="/" className="tab-item" paddingY={1} paddingX={3}>
                            <FaHome />
                            Home
                        </Tab>
                        <Tab as={Link} to="/restaurant" className="tab-item" paddingY={1} paddingX={3}>
                            <FaUtensils />
                            Restaurants
                        </Tab>
                        <Tab as={Link} to="/rooms" className="tab-item" paddingY={1} paddingX={3}>
                            <FaBed />
                            Rooms
                        </Tab>
                        <Tab as={Link} to="/gallery" className="tab-item" paddingY={1} paddingX={3}>
                            <FaImages />
                            Gallery
                        </Tab>
                        <Tab as={Link} to="/about" className="tab-item" paddingY={1} paddingX={3}>
                            <FaInfoCircle />
                            About
                        </Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='green.500' borderRadius='1px' />
                </Tabs>
            </div>

            <div className='resttax'>Captured Tranquillity</div>
            <div className='nobold'>A Pictorial Symphony of Forest Hill&apos;s Natural Elegance</div>

            <div className='boldtext1'>Restaurant</div>
            <div className='restlastimg'>
                <img className='gallery-image' src={restaurant1} alt='Restaurant 1' />
                <img className='gallery-image' src={restaurant2} alt='Restaurant 2' />
                <img className='gallery-image' src={restaurant3} alt='Restaurant 3' />
                <img className='gallery-image' src={restaurant4} alt='Restaurant 4' />
            </div>

            <div className='boldtext1'>Rooms</div>
            <div className='restlastimg'>
                <img className='gallery-image' src={room1} alt='Room 1' />
                <img className='gallery-image' src={room2} alt='Room 2' />
                <img className='gallery-image' src={room3} alt='Room 3' />
                <img className='gallery-image' src={room4} alt='Room 4' />
            </div>

            <div className='boldtext1'>Scenic Nature</div>
            <div className='restlastimg'>
                <img className='gallery-image' src={nature1} alt='Nature 1' />
                <img className='gallery-image' src={nature2} alt='Nature 2' />
                <img className='gallery-image' src={nature3} alt='Nature 3' />
                <img className='gallery-image' src={nature4} alt='Nature 4' />
            </div>

            <div className='boldtext1'>Fresh Picks Corner</div>
            <div className='restlastimg'>
                <img className='gallery-image' src={pick1} alt='Pick 1' />
                <img className='gallery-image' src={pick2} alt='Pick 2' />
                <img className='gallery-image' src={pick3} alt='Pick 3' />
                <img className='gallery-image' src={pick4} alt='Pick 4' />
            </div>

            {/* Internal CSS */}
            <style>{`
                .navbar1 {
                    margin-bottom: 20px;
                }

                .tab-item {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 1rem;
                }

                .resttax {
                    text-align: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin: 20px 0;
                }

                .nobold {
                    text-align: center;
                    font-size: 1.2rem;
                    color: #555;
                    margin-bottom: 20px;
                }

                .boldtext1 {
                    text-align: center;
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin: 10px 0;
                }

                .restlastimg {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .gallery-image {
                    width: 300px;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
            `}</style>
        </>
    );
}
<React/>
export default GaLLery;
