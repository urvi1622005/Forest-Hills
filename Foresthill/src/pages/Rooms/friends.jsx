import React from "react";
import { Tabs, TabList, Tab, TabIndicator, Spacer, Grid, GridItem,require } from '@chakra-ui/react';
import { FaHome, FaUtensils,LuBed, FaBed, FaImages, FaInfoCircle, FaUserFriends, FaWifi, FaWhatsapp, FaRegCalendarCheck } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './friends.css'; // Component-specific styles

function Friends() {
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
            <Tab as={Link} to="/rooms" className="tab-item1" paddingY={1} paddingX={3}>
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

      <div className='resttax1'>Friends Deluxe Room (3 Rooms)</div>
      <div className='familyphotos'>
        <Grid
          h="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem borderRadius={20} rowSpan={2} colSpan={2} bg="tomato">
            <img src={require('../../assets/rooms/friend/1.png')} alt='Friends Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={require('../../assets/rooms/friend/2.png')} alt='Friends Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={require('../../assets/rooms/friend/3.png')} alt='Friends Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={require('../../assets/rooms/friend/4.png')} alt='Friends Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip">
            <img src={require('../../assets/rooms/friend/5.png')} alt='Friends Room' className='grid-image' />
          </GridItem>
        </Grid>
      </div>

      <div className='lefttext'>
        <div className='boldtext1'>Enhancing</div>
        <div className='boldtext1'>Your Stay with Distinctive Features</div>
        <div className='boldtext1'>(Medium Rooms)</div>
        <div className='nobold1'>
          Only 3 Friends Retreat Rooms are available, so book your cozy escape now.
          <Spacer height={5}/>
          Perfect for duos, our Friends Retreat Room welcomes up to 2 guests.
          <Spacer height={5}/>
          Indulge in the ease of room service, with charges applicable for added convenience.
          <Spacer height={5}/>
          Enjoy breathtaking surroundings with picturesque views right from your room.
          <Spacer height={5}/>
          Additional mattresses are available upon request to ensure a comfortable stay for everyone.
          <Spacer height={5}/>
          Experience a cozy seating area with wooden chairs for comfort.
        </div>
      </div>

      <div className="card">
        <h1>₹ 2,500</h1>
        <h2>Night</h2>
        <p><FaWifi className="icon" /> Wifi Included</p>
        <p><LuBed className="icon" /> Duo Delight Retreats</p>
        <div className="buttons">
          <button className="button book-now"><FaRegCalendarCheck className="icon" /> Book Now</button>
          <button className="button more-info"><FaWhatsapp className="icon" /> Contact Us</button>
        </div>
      </div>
    </>
  );
}

export default Friends;
