import React, { useState } from 'react';
import '../App.css';

const Student = () => {
    const [data] = useState([
        {
          Name:"John",
          Age:"26",
          Course:"MERN",
          Batch:"October",
          Change:"Edit"
        },
        {
            Name:"Doe",
            Age:"25",
            Course:"MERN",
            Batch:"November",
            Change:"Edit"
          },
          {
            Name:"Biden",
            Age:"26",
            Course:"MERN",
            Batch:"September",
            Change:"Edit"
          },
          {
            Name:"Barar",
            Age:"22",
            Course:"MERN",
            Batch:"September",
            Change:"Edit"
          },
          {
            Name:"Christ",
            Age:"23",
            Course:"MERN",
            Batch:"October",
            Change:"Edit"
          },
          {
            Name:"Elent",
            Age:"24",
            Course:"MERN",
            Batch:"November",
            Change:"Edit"
          },
          {
            Name:"Harshita Sharma",
            Age:"24",
            Course:"MERN",
            Batch:"October",
            Change:"Edit"
          }
        ])
  return (
    <div className='main'>
        <p className='heading'>Student Details</p>
        <button className='button' type='button'>Add new Student</button>
        <div className='box'>
            <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return(
                              <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Batch}</td>
                                <td>{item.Course}</td>
                                <td>{item.Change}</td>
                              </tr>
                              )
                              })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student;