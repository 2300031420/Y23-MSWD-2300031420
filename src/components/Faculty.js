import React from 'react'

function Faculty (props){
  return (
    <div>
    <h2>
      Faculty Information
      </h2>
      <p> Name: {props.name}</p>
      <p> Department: {props.department}</p>
    
    </div>
  )
}

export default Faculty