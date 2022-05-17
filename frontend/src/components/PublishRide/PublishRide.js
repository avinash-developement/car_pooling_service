import React, { useEffect } from 'react'
import { Form, Button} from 'react-bootstrap';


function PublishRide() {
  return (  
    <div className="wrapper-form">
    <div id="form-div">
        <Form>
            <Form.Control className="form-input-box1" type="email" placeholder="" />
            <Form.Control className="form-input-box1" type="email" placeholder="" />
            <Form.Control className="form-input-box1" type="email" placeholder="" />
            <Form.Control className="form-input-box4" type="date"  placeholder="" />
            <Button className="form-input-box1" variant="primary" type="submit">
            Search
            </Button>
        </Form>
    </div>
</div>
  )
}

export default PublishRide