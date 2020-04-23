import React from 'react';

const navStyle = {
    'position': 'fixed',
    'top': 0,
    'width': '100%',
    'marginLeft': '20%',
    'padding': 0,
    'zIndex': 100
}

const Navbar = () => {
    return (
        <nav className="navbar-navbar-dark bg-primary" style={navStyle}>
            <span className="navbar-brand ml-4">
                <svg class="bi bi-code-slash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z" clip-rule="evenodd"/>
                </svg>
            </span>
        </nav>
    )
}

export default Navbar; 