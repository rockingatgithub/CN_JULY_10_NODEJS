import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './login.module.css'
import Clock from '../test';

const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
  
    const loginHandler = async (event) => {
  
      event.preventDefault()
  
      const loginResponse = await fetch('http://localhost:8000/auth/jwt', 
      {
        method: 'POST',
        body: JSON.stringify({
          email, password
        }),
  
        headers: {
          'Content-Type': 'application/json'
        }
  
      })
  
      const parsedResponse = await loginResponse.json()
      console.log("the parsedresponse", parsedResponse)
  
      if(loginResponse.status === 200) {
        props.setUser(parsedResponse.user)
        Cookies.set('user', parsedResponse.token)
        navigate('/interview')
      }
  
    }

    const googleOnSuccessHandler = async (credentialResponse) => {

      // console.log(credentialResponse.credential)

      if(credentialResponse.credential){
          const response = await fetch('http://localhost:8000/auth/google', {
          method: 'POST',
          body: JSON.stringify({token: credentialResponse.credential}),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const loginResponse = await response.json()
        console.log("The response", loginResponse)
        if(response.status === 200) {
          props.setUser(loginResponse.user)
          Cookies.set('user', loginResponse.token)
          navigate('/interview')
        }
      }

    }
  
  
    return  <>
  
      <h3 id='login-heading' > Login Form </h3>

      <Clock/>
  
      <Form id='login-form' onSubmit={loginHandler} >
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
  


  export default LoginForm