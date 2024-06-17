import React from 'react';
import { Navbar, Nav, Container, NavbarText } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import logo1 from '../assets/imagenes/celular1.png';
export default function Navbarprimero() {
  return (
    <> <div className="titulo" style={{
      background: 'linear-gradient(to right, #000000, #434343)',
      padding: '10px',
      borderRadius: '10px',
      textAlign: 'center',
      fontFamily: 'Times New Roman, Times, serif',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', fontStyle: 'italic' }}>
        Tienda de Celulares Bey 
      </h1>
    </div>
    
      <Navbar className="navBg" variant='dark' expand="lg">
    
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className='logoPrincipal' src={logo1} alt="Logo de la tienda de celulares" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/Contactos">Contactos</Nav.Link>
              <Nav.Link as={Link} to="/Creditos">Creditos</Nav.Link>
              <Nav.Link as={Link} to="/Accesorios">Accesorios</Nav.Link>
              <Nav.Link as={Link} to="/Marcas Asociadas">MarcasAsociadas</Nav.Link>
            </Nav>
            <Navbar.Brand as={Link} to="/">
            <img className='logoPrincipal' src={logo1} alt="Logo de la tienda de celulares" />
          </Navbar.Brand>
            <Navbar.Text className="text-white">
              COMPRA ONLINE!!
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
}
