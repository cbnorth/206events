import React, { Component } from 'react';
import './events.scss';

import Weddings from './Weddings.js';
import PrivateParties from './PrivateParties';
import CorporateEvents from './CorporateEvents.js';
import MediaQuery from 'react-responsive'
import Slider from "react-slick";

class Events extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        };

        return (
            <div>
                <MediaQuery query="(max-width: 767px)">
                    <Slider {...settings}>
                        <Weddings />
                        <CorporateEvents />
                        <PrivateParties />
                    </Slider>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <Weddings />
                    <CorporateEvents />
                    <PrivateParties />
                </MediaQuery>
            </div>
        );
    }
}

export default Events;