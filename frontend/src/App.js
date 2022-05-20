import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PublishRide from  './components/PublishRide/PublishRide';
import SearchRide from './components/SearchRide/SearchRide';
import { Footer } from './components/Footer/Footer';
import GetAllRides from './components/GetAllRides/GetAllRides';
import GetRideDetails from './components/GetRideDetails/GetRideDetails';
import Login from './components/Login/Login.js';

function App() {
  const [startLocation, set_startLocation] = useState("")
    const [endLocation, set_endLocation] = useState("")
    const [passengers, set_passengers] = useState("")
    const [rideDate, set_rideDate] = useState("")
    const [rideId, set_rideId] = useState("")
    const [userId, set_userId] = useState("")

  const handleStartLocationChange = (event) =>{
      set_startLocation(event.target.value)
  }

  const  handleEndLocationChange = (event) =>{
      set_endLocation(event.target.value)
  }

  const handleRideDateChange = (event) =>{
      set_rideDate(event.target.value)
  }

  const handlePassengerChange = (event) =>{
      set_passengers(event.target.value)
  }
  const handleRide = (id) =>{
    set_rideId(id)
}
  

  return (
    <Router>
        <div >
        <Header />
          <Routes>
          <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/search-ride' element={<SearchRide />} />
            <Route exact path='/publish-ride' element={<PublishRide />} />
            <Route exact path='/get-ride-details' element={<GetRideDetails
             rideId={rideId}
             userId={userId}
             />} />
            <Route exact path='/get-all-rides' element={<GetAllRides 
              startLocation={startLocation}
              endLocation = {endLocation}
              rideDate={rideDate}
              passengers={passengers}
              handleRide={handleRide}
              userId={userId}
              />} />
            <Route exact path='/' element={<Home 
              handleEndLocationChange={handleEndLocationChange}
              handlePassengerChange={handlePassengerChange}
              handleRideDateChange={handleRideDateChange}
              handleStartLocationChange={handleStartLocationChange} />} />
          </Routes>
          {/* <Footer /> */}
      </div>
      </Router>
  );
}

export default App;
