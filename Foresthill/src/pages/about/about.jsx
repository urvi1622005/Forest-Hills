import React from 'react';
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GreenLast from './greenLast.jsx';
import Strip from '../Home/Strip.jsx';

// Import the Poppins font from Google Fonts
// import "@fontsource/poppins"; 

function About() {
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
      
      <div className='about-content'>
        <div className='about'>Forest Hill Retreat</div>
        <div className='subtitle'>Where Nature Beckons and Hospitality Embraces</div>
        
        <div className='description'>
          Discover Serenity at Forest Hill, a captivating hotel cum cottage nestled 12 km away from the vibrant city of Shimla. Perched on the outskirts, amidst the serene hills and mountains, Forest Hill offers a breath-taking escape from the hustle and bustle of city life. Immerse yourself in the enchanting beauty of nature, with every glance revealing a picturesque landscape.
          <br /><br />
          Our haven not only provides a tranquil retreat but also tantalizes your taste buds with delicious local cuisine, making you feel truly connected to the hills. Forest Hill Hotel is more than an escape; it&apos;s an invitation to experience the harmony of nature and the warmth of mountain hospitality.
        </div>
      </div>

      <GreenLast />
    
      
      <style>{`
        .navbar1 {
          margin-bottom: 20px;
        }

        .tab-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 1rem;
          font-family: 'Poppins', sans-serif;
        }

        .about-content {
          padding: 40px;
          background-color: #f8f9fa;
          text-align: center;
          border-radius: 15px;
          margin: 20px auto;
          max-width: 800px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .about {
          font-size: 2.5rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #2c3e50;
        }

        .subtitle {
          font-size: 1.5rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          color: #34495e;
          margin: 20px 0;
        }

        .description {
          font-size: 1rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          color: #7f8c8d;
          line-height: 1.8;
        }
      `}</style>
      <Strip/>
    </>
  );

}
<React/>

export default About;
