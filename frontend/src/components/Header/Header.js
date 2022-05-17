// import { button className = "header-button" } from "bootstrap";
import React, {useState} from "react";
import { Navbar, Container, button } from 'react-bootstrap';
import { MdSearch, MdLibraryAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './Header.css';



const Header = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }
    const handlePublishRide = () => {
        navigate('/publish-ride')
    }
    const handleSearchRide = () => {
        navigate('/search-ride')
    }
    return (
    <Navbar>
        <Container>
            <button className = "header-button" onClick={handleHome}>
            <Navbar.Brand>LetsTravel</Navbar.Brand>
            </button  >
            <Navbar.Toggle />
            <div className="nav-components-right">
            <button className = "header-button"  onClick={handleSearchRide}>
            <MdSearch></MdSearch>
            <span>Search</span>
            </button >
            <span>&nbsp;&nbsp;</span>






            <button className = "header-button" onClick={handlePublishRide}>

            <MdLibraryAdd></MdLibraryAdd>Publish your ride
            </button >
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
            </div>
            {/* <FontAwesomeIcon icon="fa-magnifying-glass" >KJASN</FontAwesomeIcon> */}
        </Container>
    </Navbar>
    );
};
export default Header;