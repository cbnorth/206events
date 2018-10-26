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
                            <p>Ambiance: the mood, character, quality, tone, atmosphere, particularly of an environment.  Nothing says ambiance like music and lighting! From simple elegance to over-the-top "wow", we can help you achieve exactly the right feel for your event.  </p>
                            <p>Architectural up-lighting, texture lighting to broadcast patterns on walls or ceilings, custom signature name spotlights or highlights to accent your cake or floral arrangements—206 Events can transform your event space and help create your dreams!</p>
                        </div>
                    </div>
                    <div className="event-image">
                        <img src={parties} alt="" />
                    </div>
                </Reveal>
            </div>
        );
    }
}

export default PrivateParties;