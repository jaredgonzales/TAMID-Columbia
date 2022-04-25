import "./Card.css"
import React from 'react';

export default function Card(props) {
    return (
        <div class="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" />
            <div class="card-container">
                <h3>{props.name}</h3>
                <p>{props.year}</p>
                <p>{props.position}</p>
                <p>{props.company}</p>
            </div>
        </div>
    );
}

export function Database() {
    return (
        <div class="database">
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
            <Card name="John Doe" year="2019" position="Financial Analyst" company="Morgan Stanley"/>
        </div>
    );
}