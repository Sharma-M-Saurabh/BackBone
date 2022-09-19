import React from 'react'
import {Routes, Route } from 'react-router-dom'

import NavigationManager from '../../Components/Navigation/NavigationManager';
import AddSoftwareType from '../Software/AddSoftwareForm';
import SoftwareSubType from '../SoftwareSubTypes/SoftwareSubType';
import SignUp from '../Auth/SignUp';
import Signin from '../../Containers/Signin';
import AddSoftwareList from '../Software/SoftwareList';
import SoftwarePage from '../../Pages/SoftwarePage';
import Dashboard from '../../Containers/Dashboard';
import SoftwareType from '../../Pages/SoftwareType';
const RouteManager = () => {
  return (
    <Routes>
        <Route path="/" element={<NavigationManager />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="signup" element={<SignUp/>} />
        <Route path="signin" element={<Signin/>} />
        <Route path="softwaresubtype" element={<SoftwareSubType/>} />
        <Route path='softwaretype' element={<SoftwarePage/>} />
        <Route path="softwareform" element={<AddSoftwareType/>} />
        <Route path="softype" element={<SoftwareType/>} />
        </Route>
    </Routes>
      
  )
}

export default RouteManager
