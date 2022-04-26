import "./Card.css"
import React, { Component } from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img href="https://www.w3schools.com/howto/img_avatar.png" alt="placeholder" />
            <div className="card-container">
                <h3>{props.name}</h3>
                <p>{props.year}</p>
                <p>{props.company}</p>
                <a className="contact-button">Contact</a>
            </div>
        </div>
    );
}



export class Database extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    buildDatabase() {
        var elements = [<Card key="0" name="name" year="123" company="company" />,
            <Card key="1" name="name" year="123" company="company" />];
        fetch("https://firestore.googleapis.com/v1/projects/tamid-columbia/databases/(default)/documents/alumni").then(response => response.json()).then(data => {
            data.documents.forEach(element => {
                var fields = element.fields;
                var card = <Card key={element.name} name={fields.name.stringValue} year={fields.year.integerValue} company={fields.current_employer.stringValue} />;
                elements.push(card);
            });
        });
        console.log(elements);
        this.setState({data: elements})
    }
    
    componentDidMount() {
        buildDatabase();
    }

    

    render() {
        return (
            <div className="database">
                <div className="database-container" id="database-container">
                    {this.state.data.forEach(element => {
                        <Card name={element.name} year={element.year} company={element.current_employer} />
                    })};
                </div>
            </div>
        );
    }
}