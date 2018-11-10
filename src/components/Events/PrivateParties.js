import React, { Component } from 'react';
import Reveal from 'react-reveal/Fade';

import parties from '../../images/events/206-private-events.jpg';

class PrivateParties extends Component {
    render() {
        return (
            <div className="event">
                <Reveal>
                    <div className="event-copy">
                        <h3>Private Parties</h3>
                        <div className="event-two-column-text">
                            <p>Holiday parties, birthdays, presentations, mitzvahs, corporate events, school functions, auctions, & more...</p>
                            <p>206 Events will help you enhance any party! We can provide background music for dinners and cocktail parties, audio/visual support for meetings and presentations, dance parties for holiday celebrations and birthdays, and everything in between. We know every event is better with great music and we want to help you throw the kind of party that your guests deserve.</p>

                        </div>
                    </div>
                    <div className="event-image">
                        <img src={parties} alt="206 events can help with your private party" />
                    </div>
                </Reveal>
            </div>
        );
    }
}

export default PrivateParties;