import React from "react";
import { Link, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class RouteComponent extends React.Component {
    constructor() {
        super()
    }

    routeNavigate = () =>{
        // Navigate('/userRegistration')
    }

    render() {
        return (
            <>
                {/* <ul>
                    <li><Link to="/userinfo">UserInformation</Link></li>
                    <li><Link to="/thirdcomp">Third Component</Link></li>
                    <li><Link to="/userRegistration">User Registration</Link></li>
                    <li><Link to="/userRegistration/createUser">User Registration Child</Link></li>
                </ul> */}
                <Navbar bg="primary" variant="dark" style={{marginBottom: "20px"}}>
                    <Container>
                    <Navbar.Brand href="/">Home Page</Navbar.Brand>
                    <Nav className="me-auto">
                    {/* <Link to="/userinfo" style={{color: "#ffffff", textDecoration: 'none'}}>User Information</Link> */}
                    {/* <Link to="/userRegistration" style={{color: "#ffffff", textDecoration: 'none'}}>User Registration</Link>
                    
                    <Link to="/materialGrid" style={{color: "#ffffff", textDecoration: 'none'}}>Material Grid Component</Link>
                    <Link to="/materialTable" style={{color: "#ffffff", textDecoration: 'none'}}>Material Table Component</Link>
                     */}
                     <Link to="/commonTest" style={{color: "#ffffff", textDecoration: 'none'}}>Common Test</Link>
                    <Link to="/userinfo" style={{color: "#ffffff", textDecoration: 'none'}}>User Fetch Common</Link>
                    <Link to="/makeHoc" style={{color: "#ffffff", textDecoration: 'none'}}>Make HOC</Link>
                    <Link to="/userHocLogic" style={{color: "#ffffff", textDecoration: 'none'}}>User HOC Logic</Link>
                    <Link to="/dataFetch" style={{color: "#ffffff", textDecoration: 'none'}}>Data Fetch</Link>
                    </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default RouteComponent;