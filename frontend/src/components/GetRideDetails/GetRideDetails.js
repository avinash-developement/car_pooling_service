import React, {useState} from 'react'
import { Button,Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function GetRideDetails(props) {
    const rideDetails =[
        {
            car_model:'Honda-amaze',
            car_number:'MH16 BX 0301',
            driver_name:'Pranav',
            start_time:'2pm',
            end_time:'6pm',
            total_cost:'500'
        }
    ]
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const navigate = useNavigate();
    const handleBooking = (userId) =>{
        // alert(`${userId}`)
        // navigate('/')
        handleShow();
    }
    const handleRedirect =() =>{
        handleClose();
        navigate('/');
    }

  return (
      <div>

        <div>
          {rideDetails.map((item, i) => (
            <div>
                <div>
                    CAR MODEL:{item.car_model}
                </div>
                <div>
                    CAR NUMBER:{item.car_number}
                </div>
                <div>
                    DRIVER NAME:{item.driver_name}
                </div>
                <div>
                    START TIME:{item.start_time}
                </div>
                <div>
                    END TIME:{item.end_time}
                </div>
                <div>
                    TOTAL COST:{item.total_cost}
                </div>
                <div>
                    <Button onClick={() =>handleBooking(props.userId)}>CONFIRM BOOKING</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Thanks! {props.userId}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>
                        Booking Confirmed! 
                        </h3> 
                        <h5>
                            Enjoy your Ride!!!
                        </h5>    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleRedirect}>Okay</Button>
                    </Modal.Footer>
                </Modal>


            </div>
            
            ))}
          </div>
        <div>GetRideDetails of {props.rideId}</div>
      </div>

  )
}

export default GetRideDetails