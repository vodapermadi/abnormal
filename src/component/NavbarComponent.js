import React from "react";
import { Navbar,Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="home1" variant="dark">
        <Container>
          <Link to={`/abnormal`} className="navbar-brand" >Abnormal</Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
