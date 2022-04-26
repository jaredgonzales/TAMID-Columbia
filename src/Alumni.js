import './App.css';
import React from 'react';
import { NavBar, Footer } from './Navigation';
import { Database } from './Card';



function Alumni() {
    return (
        <div >
            <NavBar title="Alumni Database"/>
            <div className="App-body">
                <Database />
            </div>
            <Footer />
        </div>
    )
}
export default Alumni;