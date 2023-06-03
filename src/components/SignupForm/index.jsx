import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './login.module.css'
import Clock from '../test';
import { connect, useDispatch } from 'react-redux';
import { googleLogin, loginUser } from '../actions';

const SignupForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const loginHandler = async (event) => {
      event.preventDefault()
      dispatch(loginUser(name, email, password))
      navigate('/interview')
    }

    const googleOnSuccessHandler = async (credentialResponse) => {
          dispatch(googleLogin(credentialResponse))
          navigate('/interview')
    }
  
    return  <>
  
      <h3 id='login-heading' > Login Form </h3>

      {/* <Clock/> */}
  
      <Form id='login-form' onSubmit={loginHandler} >
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={event => setName(event.target.value)}  type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={event => setEmail(event.target.value)}  type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <GoogleLogin
          onSuccess={credentialResponse => 
            googleOnSuccessHandler(credentialResponse)
          }
          onError={() => {
              console.log('Login Failed');
          }}
        />

      </Form>
  
  
    </>
  
  }
  

  const mapStateToProps = (state) => {
    return { main: state }
  }


  export default connect(mapStateToProps)(SignupForm)