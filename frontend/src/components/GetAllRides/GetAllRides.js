import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap'

function GetAllRides(props) {
    const navigate = useNavigate();
    const [data, set_data] = useState([])

    useEffect(() => {
        
        fetch(`http://localhost:8048/carpooling/v1/getallrides/?start_location=${props.startLocation}&end_location=${props.endLocation}&ride_date=${props.rideDate}&no_of_paasengers=${props.passengers}` ,
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
                console.log(JSON.stringify(data));
                set_data(data)
                // set_data(data);
            //    handleLoginValidation();
              }
              
            })
            .catch(err => {
              alert(err);
            });
       
      }, [])
    
    



    const handleSelectRide = (rideId, userId) =>{
        if(userId){
            alert(rideId)
            props.handleRide(rideId);
            navigate('/get-ride-details')
        }
        else{
            props.handleRide(rideId);
            navigate('/login');
        }
        
    }

  return (
    
    <>
            <h1>Rides Available from Location {props.startLocation} To {props.endLocation}</h1>
            <Table className = "table table-bordered" >
                <tr>
                    <th>CAR MODEL</th>
                    <th>START TIME</th>
                    <th>END TIME</th>
                    <th>SEATS</th>
                    <th>COST PER HEAD(in RS)</th>
                    <th>Let's Book</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.car_model}</td>
                        <td>{item.ride_start_time}</td>
                        <td>{item.ride_end_time}</td>
                        <td>{item.seats_offered}</td>
                        <td>{item.contribution_per_head}</td>
                        <td><Button variant='primary' onClick={() =>handleSelectRide(item.ride_id,props.userId)}>Book Ride</Button></td>
                    </tr>
                ))}
            </Table>
 
        </>

  )
}

export default GetAllRides