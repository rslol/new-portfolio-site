import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/dashboard/about/About';
import JobBoard from './components/dashboard/jobSection/jobBoard';
import data from './data/jobInfo';
import skillData from './data/skillData';
import Navbar from './components/navbar/navbar';
import Skills from './components/dashboard/skills/skillSection';

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
        <Skills talents={skillData} />
      </div>
    </div>
  );
}

export default App;
