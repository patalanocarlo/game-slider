import React, { useState } from 'react';
import '../Style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar = () => {  

  const [showCollapse, setShowCollapse] = useState(false);

  const handleToggleCollapse = () => {
    setShowCollapse(!showCollapse);
  };

  return (
    <div className='custom-navbar'>
      <Navbar expand="lg" variant="dark" className="container">
        <Navbar.Brand href="#home">
          <img src="imagee" alt="Deco Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleCollapse} />
        <Navbar.Collapse id="responsive-navbar-nav" className={showCollapse ? 'show' : ''}>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Chi Siamo</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Catalogo e Offerte Videogiochi</Nav.Link>
            <Nav.Link href="#deets">Contattaci</Nav.Link>
            
          </Nav>
          <Form inline className="mr-2">
            <FormControl type="text" placeholder="Digita qui..." className="mr-sm-2" />
          </Form>
          <div className="d-flex align-items-center">
            <Button variant="outline-light">Cerca un Prodotto</Button>
          </div>
        </Navbar.Collapse>
     
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
