import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import back from "../../assets/Arrows/Vector.png"

const NavbarSabrina = () => {
  return (
    <div>
      <Navbar className="color1" variant="dark">
        <Container>
          <Link to={`/abnormal`} className="navbar-brand" >
            <img src={back} alt="back" />
          </Link>
          <Link to={`/abnormal`} className="navbar-brand ms-auto" >Abnormal</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarSabrina