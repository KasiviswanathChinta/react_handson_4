import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import ContactUs from './ContactUs';
import LinkCompo from './LinkCompo';

function  RoutesCompo () {
  return (
    <div>
        <LinkCompo/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
    </div>
  )
}

export default RoutesCompo;