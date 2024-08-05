import React from 'react'

function Course(props) {
  return (
    <div>
      <h2>Courses</h2>
      <p>
        Course Name:{props.courseName}
      </p>
      <p>
        Course code:{props.courseCode}
      </p>
    </div>
  );
}

export default Course
