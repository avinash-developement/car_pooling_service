import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap'

function GetAllRides(props) {
    const navigate = useNavigate();
    const data = [
        {
            id:'1',
            car_model: 'Honda-City',
            ride_start_time: '2pm',
            ride_end_time: '9pm',
            seats_offered: '2',
            contribution_per_head: '250'
        },
        {
            id:'12',
            car_model: 'Honda-City',
            ride_start_time: '2pm',
            ride_end_time: '9pm',
            seats_offered: '2',
            contribution_per_head: '250'
        },
        {
            id:'3',
            car_model: 'Honda-City',
            ride_start_time: '2pm',
            ride_end_time: '9pm',
            seats_offered: '2',
            contribution_per_head: '250'
        }
    ]

    const handleSelectRide = (rideId, userId) =>{
        if(userId){
            props.handleRide(rideId);
            navigate('/get-ride-details')
        }
        else{
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
                        <td><Button variant='primary' onClick={() =>handleSelectRide(item.id,props.userId)}>Book Ride</Button></td>
                    </tr>
                ))}
            </Table>
 
        </>

  )
}

export default GetAllRides