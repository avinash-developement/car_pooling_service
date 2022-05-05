import React from "react";
import { Navbar, Container} from 'react-bootstrap';
import { MdSearch, MdLibraryAdd } from "react-icons/md";
import './Header.css';



const Header = () => {
    return (
    <Navbar>
        <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <div className="nav-components-right">
            <MdSearch></MdSearch>
            <span>Search</span>
            <MdLibraryAdd></MdLibraryAdd>Publish your ride
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