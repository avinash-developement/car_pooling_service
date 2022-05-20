import React, { useEffect , useState} from 'react'
import { Form, Button} from 'react-bootstrap';
import './PublishRide.css'


function PublishRide() {
  const [startLocation1, set_startLocation1] = useState("")
  const [endLocation1, set_endLocation1] = useState("")
  const [noOfPassengers, set_noOfPassengers] = useState("")
  const [rideDate1, set_rideDate1] = useState("")
  const [cost, set_cost] = useState("")
  const [CarModel, set_CarModel] = useState("")
  const [registrationNo, set_registrationNo] = useState("") 

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

  const handlePublishRide = () =>{
    alert(`${startLocation1} ${CarModel}`)
  }




  return (  
  <div className='publish-ride-form-wrapper'>
    <div className='publish-ride-form'>
      <center><h1> PUBLISH RIDE</h1> </center><br></br> 
      <Form className='publish-form' onSubmit={handlePublishRide}>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default PublishRide