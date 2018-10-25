import React, { Component } from 'react';
import Reveal from 'react-reveal/Fade';


class ServiceParties extends Component {
    render() {
        return (
            <div className="event">
                <Reveal>
                    <div className="event-copy">
                        <ul>
                            <li>AHoliday parties,</li>
                            <li>birthdays, </li>
                            <li>presentations,</li>
                            <li>mitzvahs,</li>
                            <li>corporate events,</li>
                            <li>school functions,</li>
                            <li>auctions, & more</li>
                        </ul>
                        <p>206 Events will help you enhance any party!  We can provide background music for dinners and cocktail parties, audio/visual support for meetings and presentations, dance parties for holiday celebrations and birthdays, and everything in between. We know every event is better with great music and we want to help you throw the kind of party that your guests deserve.</p>
                    </div>
                    <div className="event-image">
                        <img src="https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg" />
                    </div>
                </Reveal>
            </div>
        );
    }
}

export default ServiceParties;