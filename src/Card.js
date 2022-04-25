import "./Card.css"
import React from 'react';

export default function Card(props) {
    return (
        <div class="card">
            <img href="https://www.w3schools.com/howto/img_avatar.png" alt="placeholder" />
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
    var container = Document.GetElementByID("database-container");
    fetch("/getAlumni").then(response) => {
        for (var i = 0; i < response.count; i++) {
            current_alumni = response[i]
            var card = <Card name=current_alumni.name year=current_alumni.year />
            container.addChild(card)
        }
    }
    return (
        <div class="database-container" id="database-container">
            <h1 id="database-loading">Loading...</h1>
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