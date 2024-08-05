import React from 'react'

function Student (props){
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {props.name}</p>
      <p>ID:{props.id}</p>
      
    </div>
  )
}

export default Student
