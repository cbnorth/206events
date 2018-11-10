import React, { Component } from 'react';
import Reveal from 'react-reveal/Fade';

import corporate from '../../images/events/206-corporate-events.jpg';

class CorporateEvents extends Component {
    render() {
        return (
            <div className="event">
                <Reveal>
                    <div className="event-copy">
                        <h3>Corporate Events</h3>
                        <div className="event-two-column-text">
                            <p>We start by building relationships and getting to know you as our client.  We gather information about your guests, determine your message or vision and then use our expertise to tell your story.  From simple elegance to over-the-top "wow", we can help you achieve exactly the right feel for your event. </p>
                            <p>Architectural lighting to broadcast patterns and textures on walls or blank spaces, custom logo spotlights or table highlights to accent your floral arrangements, unique stage design combined with elegant drapery - 206 Events can transform your event space and help create your dreams!</p>
                        </div>
                    </div>
                    <div className="event-image">
                        <img src={corporate} alt="206 events does corporate events, we understand that it’s got to be perfect...and we can help with that!" />
                    </div>
                </Reveal>
            </div>
        );
    }
}

export default CorporateEvents;