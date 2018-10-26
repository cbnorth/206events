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
                            <p>Ambiance: the mood, character, quality, tone, atmosphere, particularly of an environment.  Nothing says ambiance like music and lighting! From simple elegance to over-the-top "wow", we can help you achieve exactly the right feel for your event.  </p>
                            <p>Architectural up-lighting, texture lighting to broadcast patterns on walls or ceilings, custom signature name spotlights or highlights to accent your cake or floral arrangements—206 Events can transform your event space and help create your dreams!</p>
                        </div>
                    </div>
                    <div className="event-image">
                        <img src={corporate} alt="206 Events does sound, lighting and event coordination for wedding and other events" />
                    </div>
                </Reveal>
            </div>
        );
    }
}

export default CorporateEvents;