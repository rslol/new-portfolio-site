import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => { 
    return (
        <nav className="sidebar">
            <ul>
                <Router>
                    <li><Link to='#'>Home</Link></li>
                    <li><Link to='#'>Home</Link></li>
                    <li><Link to='#'>Home</Link></li>
                    <li><Link to='#'>Home</Link></li>
                </Router>
            </ul>
        </nav>
    )   
};

export default Sidebar; 