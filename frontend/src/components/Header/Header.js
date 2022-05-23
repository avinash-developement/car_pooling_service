// import { button className = "header-button" } from "bootstrap";
import React, {useEffect, useState} from "react";
import { Navbar, Container, button } from 'react-bootstrap';
import { MdSearch, MdLibraryAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './Header.css';



const Header = (props) => {
    const [loginContent, set_loginContent] = useState("")

    useEffect(() => {  
        if(props.userId !== "")
            set_loginContent(<span>{props.userId}</span>)
        else set_loginContent (
                                <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <a href="#login">Login</a>
                                </Navbar.Text>
                                </Navbar.Collapse>
                            )          
    })
                        

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }
    const handlePublishRide = () => {
        if(props.userId){
            navigate('/publish-ride')
        }
        else
        {
            navigate('/login')
        }
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
            {loginContent}
            </div>
            {/* <FontAwesomeIcon icon="fa-magnifying-glass" >KJASN</FontAwesomeIcon> */}
        </Container>
    </Navbar>
    );
};
export default Header;