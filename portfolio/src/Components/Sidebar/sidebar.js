import React from 'react';
import './sidebar.css';
import TeamMember from '../Team Member/team-member'

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Team members</h1>
                    <TeamMember src="" name="" text="" email=""></TeamMember>
                    <TeamMember src="" name="" text="" email=""></TeamMember>
                    <TeamMember src="" name="" text="" email=""></TeamMember>
                    <TeamMember src="" name="" text="" email=""></TeamMember>
                </div>
                <div>
                    <h1>Our partners</h1>
                    {/* Logo components? */}
                </div>
            </div>
        )
    }
}