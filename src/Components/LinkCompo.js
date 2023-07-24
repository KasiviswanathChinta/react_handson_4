import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function  LinkCompo() {
  return (
    <div className='link'>
        <Link className='line' to="/">Home</Link>
        <Link className='line' to="/student">Student</Link>
        <Link className='line' to="/contactus">ContactUs</Link>
    </div>
  )
}

export default LinkCompo;