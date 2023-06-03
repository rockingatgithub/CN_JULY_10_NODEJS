import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Profile from '../Profile'
import InterviewsList from '../InterviewList'
import LoginForm from '../LoginForm'
import { useState } from 'react';
import Login from '../Login';
import SignupForm from '../SignupForm';
import ToDo from '../Todo';


const App = () => {

  return <>

  {/* <Login/> */}

<GoogleOAuthProvider clientId='' >
<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Coding Ninjas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to='/profile' > Go To Dashboard </Link> </Nav.Link>
            <Nav.Link> <Link to='/interview' > Go To Interviews </Link> </Nav.Link> 
            <Nav.Link>  <Link to='/' > Home </Link> </Nav.Link>
            <Nav.Link>  <Link to='/signup' > Singup </Link> </Nav.Link> 
            <Nav.Link>  <Link to='/todo' > ToDo </Link> </Nav.Link> 

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  <Routes>
    <Route path='/' element={<LoginForm />} />
    <Route path='/interview' element={<InterviewsList />} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/signup' element={<SignupForm/>} />
    <Route path='/todo' element={<ToDo/>} />


  </Routes>
  </GoogleOAuthProvider>
  </>
}

export default App