import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/img/TechElecon.png'
import { LinkContainer } from 'react-router-bootstrap';
import {useNavigate} from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    const logMeOut = () => {
      //sessionStorage.removeItem("accessJWT");
      //localStorage.removeItem("crmSite");
    //   userLogout();
     navigate('/')
    
    };

    return (
        <Navbar collapseOnSelect bg="info" variant='dark' expand="md">
            <Navbar.Brand>
                <img src={logo} alt='Tech Elecon' width='120px' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ 'marginLeft': 'auto' }} >
                    {/* <Link to='/Dashboard' style={{ "color": "black",'textDecoration':'none' }}>Dashboard</Link>
                    <Link to='/Tickets' style={{ "color": "black",'textDecoration':'none' }}>Tickets</Link>
                    <Link to='/' style={{ "color": "black" ,'textDecoration':'none'}}>Logout</Link> */}

                    <LinkContainer to='/Dashboard'>
                        <Nav.Link style={{'textDecoration': 'none' }}>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/Tickets'>
                        <Nav.Link style={{'textDecoration': 'none' }}>Tickets</Nav.Link>
                    </LinkContainer>


                    <Nav.Link onClick={logMeOut}  style={{'textDecoration': 'none' }}>Logout</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header