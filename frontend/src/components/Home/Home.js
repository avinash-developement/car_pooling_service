import React, { useState } from "react";
import { Form, Button, Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


import './Home.css';

const Home = (props) => {

    const navigate = useNavigate();
    const handleGetAllRides = () => {
        navigate('/get-all-rides')
    }

    const handleSubmit = (event) =>{
        // alert(`${startLocation} ${endLocation}${passengers}${rideDate}`)
        handleGetAllRides();
    }
    
    return (
        <div>
        <div className="wrapper-form">
        <img src = "https://img.freepik.com/free-vector/taxi-out-from-phone-booking-online-taxi-service-graphic-design-vector-illustration_620585-19.jpg?w=2000" />
            <div id="form-div1">
                <Form  className="search-form" onSubmit={handleSubmit}>
                    <Form.Control className="form-input-box1" type="text" placeholder="Start Location" 
                    value = {props.startLocation}
                    onChange={props.handleStartLocationChange} 
                    />

                    <Form.Control className="form-input-box1" type="text" placeholder="End Location" 
                    value = {props.endLocation}
                    onChange={props.handleEndLocationChange} 
                    />

                    <select  className="form-input-box1" name="passengers"
                    value = {props.passengers}
                    onChange={props.handlePassengerChange}
                    >
                    <option selected disabled>Passengers</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>

                    <Form.Control className="form-input-box4" type="date"  placeholder="" 
                     value = {props.rideDate}
                     onChange={props.handleRideDateChange} 
                    />

                    <Button className="form-input-box1" variant="primary" type="submit">
                    Search
                    </Button>
                </Form>
            </div>
        </div>


        <div className="wrapper-services-info">

            <div className="services-info">
                <div>

                <h4>Your pick of rides at low prices</h4> 

                    No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.
                </div>
                <div>

                    <h4>Scroll, click, tap and go!</h4>
                    Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.
                </div>
                <div>

                    <h4>Trust who you travel with</h4>

                    We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.

                </div>
            </div>
        </div>

        <div className="wrapper-safety">
             <div className="safety">
             
                <Card style={{ width: '40rem' , top: '9px', right: '9px'}}>
                <Card.Body>
                    <Card.Title>Your safety is our priority</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                    At LetsTravel, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.

                    </Card.Text>
                    <Card.Link href="#">Read more</Card.Link>
                </Card.Body>
                </Card>
            </div>
        </div>

        <div className="help-wrapper">
            <div className="help">

                    <div>
                        <Card style={{ width: '40rem' , top: '9px', right: '9px'}}>
                            <Card.Body>
                                <Card.Title>How do I book a carpool ride?</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                You can book a carpool ride on our mobile app, or on LetsTravel.com. Simply search for your destination, choose the date you want to travel and pick the carpool that suits you best! Some rides can be booked instantly, while other rides require manual approval from the driver. Either way, booking a carpool ride is fast, simple and easy.

                                </Card.Text>
                                <Card.Link href="#">Read more</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '40rem' , top: '9px', right: '9px'}}>
                            <Card.Body>
                                <Card.Title>How do I publish a carpool ride?</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                Offering a carpool ride on LetsTravel is easy. To publish your ride, use our mobile app or LetsTravel.com. Indicate your departure and arrival points, the date and time of your departure, how many passengers you can take and the price per seat. You’ll also need to choose how you want to accept bookings (either automatically or manually), and you have the option of adding any important details you think your passengers should know about. Then tap ‘Publish ride’ and you’re done!

                                </Card.Text>
                                <Card.Link href="#">Read more</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
            <div className="help">

                    <div>
                        <Card style={{ width: '40rem' , top: '9px', right: '9px'}}>
                            <Card.Body>
                                <Card.Title>How do I cancel my carpool ride?</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.

                                </Card.Text>
                                <Card.Link href="#">Read more</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '40rem' , top: '9px', right: '9px'}}>
                            <Card.Body>
                                <Card.Title>What are the benefits of travelling by carpool?</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                There are multiple advantages to carpooling, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-friendly, as sharing a car means there will be fewer cars on the road, and therefore fewer emissions. Taking a carpool ride is also a safe way to travel in the current times. Because there are only a few people in a car, you have fewer points of contact and there’s less risk than other travel options.



                                </Card.Text>
                                <Card.Link href="#">Read more</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                
                </div>


            </div>
            



        </div>
    );
}
export default Home