import React from "react";
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link ,require} from 'react-router-dom';
import './gallery.css';

const restaurant1 = require('../../assets/Gallery/Restaurant/1.jpeg');
const restaurant2 = require('../../assets/Gallery/Restaurant/2.jpeg');
const restaurant3 = require('../../assets/Gallery/Restaurant/3.jpeg');
const restaurant4 = require('../../assets/Gallery/Restaurant/4.jpeg');

const room1 = require('../../assets/Gallery/rooms/1.jpeg');
const room2 = require('../../assets/Gallery/rooms/2.jpeg');
const room3 = require('../../assets/Gallery/rooms/3.jpeg');
const room4 = require('../../assets/Gallery/rooms/4.jpeg');

const nature1 = require('../../assets/Gallery/Nature/1.jpeg');
const nature2 = require('../../assets/Gallery/Nature/2.jpeg');
const nature3 = require('../../assets/Gallery/Nature/3.jpeg');
const nature4 = require('../../assets/Gallery/Nature/4.jpeg');

const pick1 = require('../../assets/Gallery/picks/1.jpeg');
const pick2 = require('../../assets/Gallery/picks/2.jpeg');
const pick3 = require('../../assets/Gallery/picks/3.jpeg');
const pick4 = require('../../assets/Gallery/picks/4.jpeg');

function Gallery() {
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

        

        </>
    );
}

export default Gallery;
