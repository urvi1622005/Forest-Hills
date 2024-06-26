import React from "react";
import { Tabs, TabList, Tab, TabIndicator, Spacer, Grid, GridItem } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle, FaUserFriends, FaWifi, FaWhatsapp, FaRegCalendarCheck } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { LuBed } from "react-icons/lu";
import Strip from "../Home/Strip";
import './Couple.css';

// Import images
import img1 from '../../assets/rooms/couple/1.png';
import img2 from '../../assets/rooms/couple/2.png';
import img3 from '../../assets/rooms/couple/3.png';
import img4 from '../../assets/rooms/couple/4.png';
import img5 from '../../assets/rooms/couple/5.png';

function Couple() {
  return (
    <>
      <div className="navbar1">
        <Tabs position="relative" variant="unstyled" height={5} width={70}>
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
          <TabIndicator mt="-1.5px" height="2px" bg="green.500" borderRadius="1px" />
        </Tabs>
      </div>

      <div className="typesroomsbar">
        <Tabs position="relative" variant="unstyled" height={5} width={40}>
          <TabList>
            <Tab as={Link} to="/" className="tab-item1" paddingY={1} paddingX={3}>
              <MdFamilyRestroom />
              <Spacer width="20px" />
              Family
            </Tab>
            <Tab as={Link} to="/friends" className="tab-item1" paddingY={1} paddingX={3}>
              <FaUserFriends />
              <Spacer width="20px" />
              Friends
            </Tab>
            <Tab as={Link} to="/couple" className="tab-item1" paddingY={1} paddingX={3}>
              <IoMdHeart />
              <Spacer width="20px" />
              Couples
            </Tab>
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" width="calc(100% / 3)" bg="green.500" borderRadius="1px" />
        </Tabs>
      </div>

      <div className='resttax1'>Cozy rooms for couples and friends</div>
      <div className='familyphotos'>
        <Grid
          h="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem borderRadius={20} rowSpan={2} colSpan={2} bg="tomato">
            <img src={img1} alt='Couple Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={img2} alt='Couple Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={img3} alt='Couple Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={img4} alt='Couple Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={img5} alt='Couple Room' className='grid-image' />
          </GridItem>
        </Grid>
      </div>

      <div className='lefttext'>
        <div className='boldtext1'>Elevating</div>
        <div className='boldtext1'>Your Retreat with Unique Touches</div>
        <div className='boldtext1'>(Small Rooms)</div>
        <div className='nobold1'>
          A snug haven crafted for two, where comfort meets closeness.
          <br /><Spacer height={5} />
          Immerse in the ambiance of wooden elegance within the confines of your room.
          <br /><Spacer height={5} />
          Stay effortlessly linked with complimentary WiFi services at your fingertips.
          <br /><Spacer height={5} />
          Experience cozy luxury that won't break the bank.
          <br /><Spacer height={5} />
          Additional mattresses are available upon request to ensure a comfortable stay for everyone.
          <br /><Spacer height={5} />
          Experience a cozy seating area with wooden chairs for comfort.
        </div>
      </div>

      <div className="card">
        <h1>₹ 2,200</h1>
        <h2>Night</h2>
        <p><FaWifi className="icon" /> Wifi Included</p>
        <p>2 members Allowed</p>
        <p><LuBed className="icon" /> Duo Delight Retreats</p>
        <div className="buttons">
          <button className="button book-now"><FaRegCalendarCheck className="icon" /> Book Now</button>
          <button className="button more-info"><FaWhatsapp className="icon" /> Contact Us</button>
        </div>
      </div>
      <Strip/>
    </>
  );
}

export default Couple;
