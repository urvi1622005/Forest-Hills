import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { IoIosRestaurant } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import styled  from "styled-components";
// import './nav.css'; // Make sure the path to your CSS file is correct

const Nav = () => {
  return (
    <Main>
      <div className="navbar-container">
        <div className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active-link">
            <AiOutlineHome />
            <span>Home</span>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/restaurant" className="nav-link" activeClassName="active-link">
            <IoIosRestaurant />
            <span>Restaurant</span>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/rooms" className="nav-link" activeClassName="active-link">
            <FaBed />
            <span>Rooms</span>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/gallery" className="nav-link" activeClassName="active-link">
            <GrGallery />
            <span>Gallery</span>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active-link">
            <span>About</span>
          </NavLink>
        </div>
      </div>
    </Main>
  );
}
<React/>
export default Nav;

const Main = styled.div`
  position: absolute;
  z-index: 100;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--lightBg);
  justify-content: center; 
  top: 1.5rem;
  width: 45%;
  left: 25%;
  opacity: 0.85; /* Adjusted opacity value */
  color: var(--darkText);

  .navbar-container {
    display: flex;
    background-color: white;
    width: 100%; /* Full width */
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px;
    gap: 12px;
    height: 22px;
    font-family: 'Poppins', sans-serif;
  }

  .nav-item {
    margin: 1rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
  }

  .nav-link span {
    margin-left: 0.5rem;
  }

  .nav-link:hover {
    border-bottom: 2px solid black;
    transition: all 0.1s ease;
  }
`;

