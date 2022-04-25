import './App.css';
import React from 'react';
import { Link } from "react-router-dom";

export function NavBar(props) {
    return (
        <header className="App-header">
            {/* <h1> is an html tag for headers.
                These range from <h1> to <h6> 
                <h1> is the largest,
                <h6> is the smallest
                Used for convenientformatting.
                */}
            <h1>{props.title}</h1>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="App-footer">
            <h2>TAMID Group @ Columbia University</h2>
        </footer>
    );
}

