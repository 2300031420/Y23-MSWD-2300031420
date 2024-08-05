import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faculty from "./components/Faculty";
import Student from "./components/Student";
import Course from "./components/Course";
import './App.css';

function App() {
  const headerProps = { title: 'Welcome to Kl University' };
  const footerProps = { copyrights: '2024 school Inc.' };
  const facultyProps = { name: 'B Hanumanta Rao', department: 'CSE' };
  const courseProps = { courseName: 'CTSD', courseCode: '23SC1344' };
  const studentProps = { name: 'Vamsi Krishna', id: '2300031005' };

  return (
    <div className="App">
      <Header {...headerProps} />
      <Faculty {...facultyProps} />
      <Student {...studentProps} />
      <Course {...courseProps} />
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
