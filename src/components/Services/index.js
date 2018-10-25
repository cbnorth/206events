import React, { Component } from 'react';
import './services.scss';

import eventProduction from '../../images/icons/services-event-production.png';
import DJEmcee from '../../images/icons/services-dj-emcee.png';
import soundSystem from '../../images/icons/services-av-support.png';
import lightingDesign from '../../images/icons/services-lighting-design.png';
import entertainment from '../../images/icons/services-event-entertainment.png';
import timeManagement from '../../images/icons/services-timeline-management.png';
import eventDesign from '../../images/icons/services-design-consultation.png';

class Services extends Component {
    render() {
        return (
            <div className="services">
                <h1>Services &amp; Events</h1>
                <ul className="services-list">
                    <li>
                        <img src={eventProduction} alt="206 events does Event Production" className="eventProduction"/>
                        Event Production
                    </li>
                    <li>
                        <img src={DJEmcee} alt="206 events provides DJ &amp; Emcee services for your events" className="DJEmcee"/>
                        DJ &amp; Emcee Services
                    </li>
                    <li>
                        <img src={soundSystem} alt="206 events can provide A/V Support &amp; Sound System design" className="soundSystem"/>
                        A/V Support &amp; Sound Systems
                    </li>
                    <li>
                        <img src={lightingDesign} alt="206 events specializes in lighting design for events big and small" className="lightingDesign"/>
                        Lighting Design
                    </li>
                    <li>
                        <img src={entertainment} alt="206 events pays attention to the smallest of details and helps design all of your entertainment elements" className="entertainment"/>
                        Entertainment Elements
                    </li>
                    <li>
                        <img src={timeManagement} alt="206 events can help manage timelines at your events, so you don't have to" className="timeManagement"/>
                        Timeline Management
                    </li>
                    <li>
                        <img src={eventDesign} alt="206 events provides design consultation for events big and small" className="eventDesign"/>
                        Event Design Consultation
                    </li>
                </ul>
            </div>
        );
    }
}

export default Services;