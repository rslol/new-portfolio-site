import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/dashboard/about/About';
import JobBoard from './components/dashboard/jobSection/jobBoard';
import data from './data/jobInfo';
import Navbar from './components/navbar/navbar';

const containerStyle = {
    'marginLeft': '20%',
    'position': 'relative',
    'marginTop': '50px'
}

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <div className="container" style={containerStyle}>
        <About />
        <JobBoard jobs={data} />
      </div>
    </div>
  );
}

export default App;
