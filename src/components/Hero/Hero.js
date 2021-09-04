import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'


const Hero = ( {handleLogout}) => { 
    return (
        <Container className="hero-page">
            
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
                </nav>
            
            

        </Container>
    )
}
export default Hero;