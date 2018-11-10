import React, { Component } from 'react';
import Reveal from 'react-reveal/Fade';

import weddings from '../../images/events/206-weddings.jpg';

class Weddings extends Component {
    render() {
        return (
            <div className="event">
                <Reveal>
                    <div className="event-copy">
                        <h3>Weddings</h3>
                        <div className="event-two-column-text">
                            <p>We love weddings and we feel it requires a very unique skill set to be a great wedding producer—charasmatic, polished, engaging, organized and most importantly, flexible!  Relationships are paramount so we can build a trust that will allow you to relax and celebrate with your friends and family. By focusing our attention on the little details, we guarantee that your special day will be a reflection of you!</p>
                            <p>Any well-executed production takes effort and planning. We will help you to create those special moments throughout your wedding—a dramatic pause with just the right musical accompaniment as you approach the aisle, a well-choreographed grand entrance with your bridal party, a romantic touch during the first dance. These moments don't just happen by chance and we look forward to creating them with you, making sure you and your guests will be left with a wedding to remember.</p>
                        </div>
                    </div>
                    <div className="event-image">
                        <img src={weddings} alt="206 Events specializes in full-service Wedding Production, including Sound, Lighting, DJ &amp; Emcee Services along with Planning and Timeline Organization." />
                    </div>
                </Reveal>
            </div>
        );
    }
}

export default Weddings;