import React from "react";
import { Form, Button, Card} from 'react-bootstrap';

import './Home.css'

const Home = () => {
    return (
        <div>
        <div className="wrapper-form">
        <img src = "https://img.freepik.com/free-vector/taxi-out-from-phone-booking-online-taxi-service-graphic-design-vector-illustration_620585-19.jpg?w=2000" />
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
                    At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.

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
                                <Card.Title>Your safety is our priority</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.

                                </Card.Text>
                                <Card.Link href="#">Read more</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '40rem' , top: '9px', right: '9px'}}>
                            <Card.Body>
                                <Card.Title>Your safety is our priority</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.

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
                                <Card.Title>Your safety is our priority</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.

                                </Card.Text>
                                <Card.Link href="#">Read more</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '40rem' , top: '9px', right: '9px'}}>
                            <Card.Body>
                                <Card.Title>Your safety is our priority</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.

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