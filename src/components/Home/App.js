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


const App = () => {

  const [user, setUser] = useState(null)

  return <>
<GoogleOAuthProvider clientId='344445140675-3a0p8cokkeqfuu84e58eg188a6nle1fn.apps.googleusercontent.com' >
<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Coding Ninjas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to='/profile' > Go To Dashboard </Link> </Nav.Link>
            <Nav.Link> <Link to='/interview' > Go To Interviews </Link> </Nav.Link> 
            <Nav.Link>  <Link to='/' > Home </Link> </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  <Routes>
    <Route path='/' element={<LoginForm setUser={setUser} />} />
    <Route path='/interview' element={<InterviewsList user={user} />} />
    <Route path='/profile' element={<Profile/>} />
  </Routes>
  </GoogleOAuthProvider>
  </>
}

export default App