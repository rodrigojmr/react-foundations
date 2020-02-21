import React from 'react';
import './team-member.css';

class TeamMember extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.src}></img>
                <h2>{this.props.name}</h2>
                <p>{this.props.text}</p>
                <a href={this.props.email}>{this.props.email}</a>
            </div>
        )
    }
}