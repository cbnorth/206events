import React, { Component } from 'react';
import './events.scss';

import Weddings from './Weddings.js';
import PrivateParties from './PrivateParties';
import CorporateEvents from './CorporateEvents.js';

class Events extends Component {
    render() {
        return (
            <div>
                <Weddings />
                <CorporateEvents />
                <PrivateParties />
            </div>
        );
    }
}

export default Events;