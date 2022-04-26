import './App.css';
import React from 'react';
import { NavBar, Footer } from './Navigation';
import { Database } from './Card';



function Alumni() {
    return (
        <div className="database">
            <NavBar title="Alumni Database"/>
            <Database />
            <Footer />
        </div>
    )
}
export default Alumni;