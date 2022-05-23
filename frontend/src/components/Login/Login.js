import React, {useState} from 'react'
import {Button,Form, Modal} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


import './Login.css'

function Login(props) {
  const [show, setShow] = useState(false);
  const [loginEmail, set_loginEmail] = useState("")
  const [loginPassword, set_loginPassword] = useState("")
  const [name, set_name] = useState("")
  const [phoneNumber, set_phoneNumber] = useState("")
  const [registeEmail, set_registeEmail] = useState("")
  const [registerPassword, set_registerPassword] = useState("")
  const [data, set_data] = useState("")

  const navigate = useNavigate();

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleLoginEmailChange = (event) =>{
  set_loginEmail(event.target.value)
}
const handleLoginPasswordChange = (event) =>{
  set_loginPassword(event.target.value)
}

const handleNameChange = (event) =>{
  set_name(event.target.value)
}

const handlePhoneNumberChange = (event) =>{
  set_phoneNumber(event.target.value)
}

const handleRegisterEmailChange = (event) =>{
  set_registeEmail(event.target.value)
}

const handleRegisterPasswordChange = (event) =>{
  set_registerPassword(event.target.value)
}

const handleNavigation = () =>{
  alert("function2 called")
  if(props.rideId){
    navigate("/get-ride-details")
  }
  else
  {
    navigate("/publish-ride")
  }
  }
  

const handleRegisterModal = () =>{
  setShow(false);
  
  fetch("http://localhost:8048/carpooling/v1/signup/",
        {
          method:"POST",
          headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "POST"
          },
          body:JSON.stringify({
          name: name,
        email: registeEmail,
        password: registerPassword,
        phone_number: phoneNumber,
          })
        })
        .then(resp => resp.json())
        .then(data=> {
          if(data){
            alert("Registration Done!! ")
            data.map(item =>{
              props.handleUserId(item.id)
            })
          }
          
        })
        .catch(err => {
          alert(err);
        });
        handleNavigation();
}

const handleLoginValidation = () =>{
  alert("function_called")
  if(data){
    data.map(item=>{
      if(item.id){
        handleNavigation();
        props.handleUserId(item.id);
        
      }
      else
      {
        alert("Incorrect Credentials!!");
        navigate("/login");
        handleNavigation();
      }
    })
  }
}


const handleLogin = () =>{


  fetch(`http://localhost:8048/carpooling/v1/signup/?email=${loginEmail}&pass=${loginPassword}` ,
        {
          method:"GET",
          headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(resp => resp.json())
        .then(data=> {
          if(data){
            alert(data);
            set_data(data);
           handleLoginValidation();
          }
          
        })
        .catch(err => {
          alert(err);
        });

}



return (
  <>
    <div className='login-form-wrapper'>
            <div className='login-form'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  
                    value = {loginEmail}
                    onChange={handleLoginEmailChange}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    value = {loginPassword}
                    onChange={handleLoginPasswordChange}
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                   

                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
               
            </Form>
            <Button variant="primary" type="submit"  onClick={handleLogin}>
                    Submit
                </Button><br></br>
            Not having an accout? <button className='register-button' onClick={handleShow} >register</button>
            </div>
        </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register Here</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              autoFocus
              value = {name}
              onChange={handleNameChange}
            />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="9999999999"
              
              autoFocus
              value = {phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              value = {registeEmail}
              onChange={handleRegisterEmailChange}
            />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value = {registerPassword}
                    onChange={handleRegisterPasswordChange}
                    />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleRegisterModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default Login