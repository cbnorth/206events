import React, { Component } from 'react';
import Reveal from 'react-reveal/Fade';

class Weddings extends Component {
    render() {
        return (
            <div className="event">
                <Reveal>
                    <div className="event-copy">
                        <h3>Weddings</h3>
                        <div className="event-two-column-text">
                            <p>We love weddings and we feel it requires a very unique skill set to be a great Wedding Producer— professional, polished, engaging, friendly, organized and most importantly, flexible!  Connection with you is paramount so we can build a trust that will allow you to relax and enjoy the most important day of your life. With an attention to the little details, we guarantee that your special day will be a reflection of you! </p>
                            <p>Any well executed production takes effort and planning. We will help you to create those special moments throughout your wedding—a dramatic pause with just the right musical accompaniment as you reach the altar, a well choreographed grand entrance, a romantic touch during the first dance. These moments don't just happen by chance and we look forward to creating them with you, making sure you and your guests will be left with a wedding to remember.</p>
                        </div>
                    </div>
                    <div className="event-image">
                        <img src="https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg" alt="206 Events does sound, lighting and event coordination for wedding and other events" />
                    </div>
                </Reveal>
            </div>
        );
    }
}

export default Weddings;