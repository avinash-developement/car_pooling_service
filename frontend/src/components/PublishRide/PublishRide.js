import React, { useState} from 'react'
import { Form, Button, Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './PublishRide.css'

function PublishRide() {
  const [startLocation1, set_startLocation1] = useState("")
  const [endLocation1, set_endLocation1] = useState("")
  const [noOfPassengers, set_noOfPassengers] = useState("")
  const [rideDate1, set_rideDate1] = useState("")
  const [cost, set_cost] = useState("")
  const [CarModel, set_CarModel] = useState("")
  const [registrationNo, set_registrationNo] = useState("") 
  const [startTime, set_startTime] = useState("")
  const [endTime, set_endTime] = useState("")
  const [show, setShow] = useState(false)

  const navigate = useNavigate();


  const handleStartLocationChange1 = (event) =>{
    set_startLocation1(event.target.value)
  }

  const handleEndLocationChange1 = (event) =>{
    set_endLocation1(event.target.value)
  }

  const handleNoOfPassengers = (event) =>{
    set_noOfPassengers(event.target.value)
  }

  const handleRideDate1 = (event) =>{
    set_rideDate1(event.target.value)
  }

  const handleCost = (event) =>{
    set_cost(event.target.value)
  }

  const handleCarModel = (event) =>{
    set_CarModel(event.target.value)
  }

  const handleRegistrationNo = (event) =>{
    set_registrationNo(event.target.value)
  }

  const handleStartTime = (event) =>{
    set_startTime(event.target.value)
  }

  const handleEndTime = (event) =>{
    set_endTime(event.target.value)
  }

  const handleModalSubmit =() =>{
    setShow(false);
    navigate('/');
    
  }

  const handlePublishRide = () =>{
    fetch("http://localhost:8048/carpooling/v1/publishride/",
        {
          method:"POST",
          headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "POST"
          },
          body:JSON.stringify({
          source_city: startLocation1,
        destination_city: endLocation1,
        seats_offered: noOfPassengers,
        cost_per_head: cost,
        car_no: registrationNo,
        car_model: CarModel,
        date: rideDate1,
        start_time: startTime,
        end_time: endTime
          })
        })
        .then(resp => resp.json())
        .then(data=> {
          if(data){
            setShow(true)
          }
          
        })
        .catch(err => {
          alert(err);
        });
  }




  return (  
  <div className='publish-ride-form-wrapper'>
    <div className='publish-ride-form'>
      <center><h1> PUBLISH RIDE</h1> </center><br></br> 
      <Form className='publish-form' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='form-control-class' type="text" placeholder="Start Location" 
          value = {startLocation1}
          onChange={handleStartLocationChange1}
          />

          <Form.Control className='form-control-class' type="text" placeholder="End Location" 
          value = {endLocation1}
          onChange={handleEndLocationChange1}
          />
          
          <Form.Control className='form-control-class' type="text" placeholder="no of passengers" 
          value = {noOfPassengers}
          onChange={handleNoOfPassengers}
          />
          
          <Form.Control className='form-control-class' type="Date" placeholder="Date" 
          value = {rideDate1}
          onChange={handleRideDate1}
          />

          <Form.Control className='form-control-class' type="text" placeholder="ride start time" 
          value = {startTime}
          onChange={handleStartTime}
          />

          <Form.Control className='form-control-class' type="text" placeholder="ride end time" 
          value = {endTime}
          onChange={handleEndTime}
          />
          
          <Form.Control className='form-control-class' type="text" placeholder="cost per person" 
          value = {cost}
          onChange={handleCost}
          />
          
          <Form.Control className='form-control-class' type="text" placeholder="Car Model" 
          value = {CarModel}
          onChange={handleCarModel}
          />
          
          <Form.Control className='form-control-class' type="text" placeholder="Car Registration no" 
          value = {registrationNo}
          onChange={handleRegistrationNo}
          />
          </Form.Group>
        
      </Form>
      <Button variant="primary" type="submit" onClick={handlePublishRide}>
          Submit
        </Button>
    </div>
    <Modal show={show}>
            <Modal.Header >
              <Modal.Title>Thanks!!</Modal.Title>
            </Modal.Header>
            
                <Modal.Body>
                  <h3>Your ride is published Succesfully!!</h3>
                  <h5>check in my rides</h5>
                </Modal.Body>

            
            
          
            <Modal.Footer>
              <Button variant="primary" onClick={handleModalSubmit}>OK</Button>
            </Modal.Footer>
    </Modal>
  </div>
  )
}

export default PublishRide