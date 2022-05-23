import React, {useState, useEffect} from 'react'
import { Button,Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function GetRideDetails(props) {
    // const rideDetails =[
    //     {
    //         car_model:'Honda-amaze',
    //         car_number:'MH16 BX 0301',
    //         driver_name:'Pranav',
    //         start_time:'2pm',
    //         end_time:'6pm',
    //         total_cost:'500'
    //     }
    // ]

    const [rideDetails, set_rideDetails] = useState([])
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const navigate = useNavigate();
    const handleBooking = (userId) =>{
        handleShow();
    }
    const handleRedirect =() =>{
        fetch("http://localhost:8048/carpooling/v1/getride/",
        {
          method:"POST",
          headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "POST"
          },
          body:JSON.stringify({
            ride_id: props.rideId,
            member_id: props.userId

          })
        })
        .then(resp => resp.json())
        .then(data=> {
          if(data){
            if(data){
                handleClose();
                navigate('/');
            }
          }
          
        })
        .catch(err => {
          alert(err);
        });

    }

    useEffect(() => {
        
        fetch(`http://localhost:8048/carpooling/v1/getride/${props.rideId}` ,
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
                // alert(data);
                alert(JSON.stringify(data));
                set_rideDetails(data)
                // set_data(data);
            //    handleLoginValidation();
              }
              
            })
            .catch(err => {
              alert(err);
            });
       
      }, [])

  return (
      <div>

        <div>
          {rideDetails.map((item, i) => (
            <div>
                <div>
                    CAR MODEL:{item.car_model}
                </div>
                <div>
                    CAR NUMBER:{item.car_reg_no}
                </div>
                <div>
                    {/* DRIVER NAME:{item.driver_name} */}

                </div>
                <div>
                    START TIME:{item.ride_start_time}
                </div>
                <div>
                    END TIME:{item.ride_end_time}
                </div>
                <div>
                    TOTAL COST:{item.contribution_per_head}
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