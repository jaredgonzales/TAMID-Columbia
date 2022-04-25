import "./Card.css"
import React from 'react';

export default function Card(props) {
    return (
        <div class="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" />
            <div class="card-container">
                <h3>{props.name}</h3>
                <p>{props.year}</p>
                <p>{props.company}</p>
                <a class="contact-button">Contact</a>
            </div>
        </div>
    );
}

function buildDatabase() {
    return (
        <div class="database-container" id="database-container">
            <h1>Loading...</h1>
        </div>
        // Fetch Firestore documents
        // Get count

    );

}

export function Database() {
    return (
        <div class="database">
            {buildDatabase()}
        </div>
    );
}