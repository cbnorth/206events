import React, { Component } from 'react';
import './events.scss';

import ServiceParties from './ServiceParties.js';
import Weddings from './Weddings.js';
import ServiceLighting from './ServiceLighting.js';
import MediaQuery from 'react-responsive'
import Slider from "react-slick";

class Events extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        };

        return (
            <div>
                <MediaQuery query="(max-width: 767px)">
                    <Slider {...settings}>
                        <Weddings />
                        <ServiceLighting />
                        <ServiceParties />
                    </Slider>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <Weddings />
                    <ServiceLighting />
                    <ServiceParties />
                </MediaQuery>
            </div>
        );
    }
}

export default Events;