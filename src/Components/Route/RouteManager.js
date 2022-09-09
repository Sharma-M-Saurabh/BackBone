import React from 'react'
import {Routes, Route } from 'react-router-dom'

import NavigationManager from '../../Components/Navigation/NavigationManager';
import AddSoftwareType from '../Software/AddSoftwareType';
import SoftwareSubType from '../Software/SoftwareSubType';
import LoginPage from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import SoftwareTypes from '../../Pages/SoftwarePage';
import Signin from '../../Containers/Signin';
import AddSoftwareList from '../Software/AddSoftwareList';
import SoftwarePage from '../../Pages/SoftwarePage';
const RouteManager = () => {
  return (
    <Routes>
        <Route path="/" element={<NavigationManager/>} />
        <Route path="/softwaresubtype" element={<SoftwareSubType/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/softwaretype" element={<SoftwarePage/>} />
    </Routes>
      
  )
}

export default RouteManager
