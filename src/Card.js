import "./Card.css"
import React, { Component } from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img src="https://imgs.search.brave.com/azaTOXAqOLPVIRa8UBVgXzk93jo_vac5OGvU-D0qVPQ/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9wd2Nv/LmNvbS5zZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9H/ZW5lcmljLVByb2Zp/bGUtUGxhY2Vob2xk/ZXItdjMtODAweDgw/MC5wbmc" alt="placeholder" />
            <div className="card-container">
                <h3>{props.name}</h3>
                <p>{props.year}</p>
                <p>{props.company}</p>
                <a href="mailto:placeholder@test.com" className="contact-button">Contact</a>
            </div>
        </div>
    );
}


export class Database extends Component {
    constructor() {
        super();
        this.state = { data: null };
    }

    async componentDidMount() {
        var elements = [];
        await fetch("https://us-central1-tamid-columbia.cloudfunctions.net/getAlumni").then(response => response.json()).then(data => {
            console.log(data);
            data.documents.forEach(element => {
                var card = { name: element.name, year: element.year, company: element.current_employer, can_contact: element.can_contact };
                elements.push(card);
            });
        });
        console.log(elements);
        this.setState({ data: elements })
    }

    render() {
        var cards = [];
        if (this.state.data === null) {
            cards.push(<h1 key="0">Loading...</h1>)
        } else {
            var i = 0;
            this.state.data.forEach(element => {
                var curr = <Card key={i} name={element.name} year={element.year} company={element.company} />
                i++;
                cards.push(curr);
            })
        }
        return (
            <div className="database">
                <div className="database-container" id="database-container">
                    {cards}
                </div>
            </div>
        );
    }
}