import React from 'react';
import { Tabs, TabList, Tab, TabIndicator,require } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuChefHat } from 'react-icons/lu';
import { FaBellConcierge } from 'react-icons/fa6';
import { CgPlayListCheck } from 'react-icons/cg';
import { IoPeople } from 'react-icons/io5';
import { RiGalleryLine } from 'react-icons/ri';
import "./Restaurant.css";

function Restaurant() {
  return (
    <>
      <div className="navbar">
        <Tabs position='relative' variant='unstyled'>
          <TabList>
            <Tab as={Link} to="/" className="tab-item">
              <FaHome /> Home
            </Tab>
            <Tab as={Link} to="/restaurant" className="tab-item">
              <FaUtensils /> Restaurants
            </Tab>
            <Tab as={Link} to="/rooms" className="tab-item">
              <FaBed /> Rooms
            </Tab>
            <Tab as={Link} to="/gallery" className="tab-item">
              <FaImages /> Gallery
            </Tab>
            <Tab as={Link} to="/about" className="tab-item">
              <FaInfoCircle /> About
            </Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='green.500' borderRadius='1px' />
        </Tabs>
      </div>

      <div className="section-title">
        Discover the Soul of Our Restaurant
      </div>

      <div className="content">
        <img className='restaurant-image-main' src={require('../../assets/gallery/restaurant/1.jpeg')} alt="Restaurant Image" />

        <div className="details">
          <div className='detail-item'>
            <LuChefHat className='icon' />
            <div>
              <div className='detail-title'>Professional Chef</div>
              <div className='detail-description'>Our culinary team is led by a highly skilled and professional chef.</div>
            </div>
          </div>
          <div className='detail-item'>
            <FaBellConcierge className='icon' />
            <div>
              <div className='detail-title'>Cuisine Offerings</div>
              <div className='detail-description'>We specialize in diverse cuisines, including Indian, Himachali, and Chinese.</div>
            </div>
          </div>
          <div className='detail-item'>
            <CgPlayListCheck className='icon' />
            <div>
              <div className='detail-title'>Ordering Convenience</div>
              <div className='detail-description'>Enjoy the ease of ordering from our menu, designed to cater to your culinary preferences.</div>
            </div>
          </div>
          <div className='detail-item'>
            <IoPeople className='icon' />
            <div>
              <div className='detail-title'>Seating Capacity</div>
              <div className='detail-description'>With a spacious setting, our restaurant offers seating for 40+, ensuring a great dining experience.</div>
            </div>
          </div>
          <div className='detail-item'>
            <RiGalleryLine className='icon' />
            <div>
              <div className='detail-title'>Scenic Ambiance</div>
              <div className='detail-description'>Take in the natural beauty through our expansive windows, providing a view of nature.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-title">
        Feast Your Eyes
      </div>
      
      <div className='gallery'>
        <img className='gallery-image' src={require('../../assets/gallery/restaurant/1.jpeg')} alt="Restaurant" />
        <img className='gallery-image' src={require('../../assets/gallery/restaurant/2.jpeg')} alt="Restaurant" />
        <img className='gallery-image' src={require('../../assets/gallery/restaurant/3.jpeg')} alt="Restaurant" />
        <img className='gallery-image' src={require('../../assets/gallery/restaurant/4.jpeg')} alt="Restaurant" />
      </div>
    </>
  );
}
<React/>
export default Restaurant;
