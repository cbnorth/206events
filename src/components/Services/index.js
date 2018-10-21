import React, { Component } from 'react';
import './services.scss';

import ServiceParties from './ServiceParties.js';
import ServiceWeddings from './ServiceWeddings.js';
import ServiceLighting from './ServiceLighting.js';
import MediaQuery from 'react-responsive'
import Slider from "react-slick";

class Services extends Component {
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
                <div className="services-list">
                    Service icons
                </div>
                <MediaQuery query="(max-width: 767px)">
                    <Slider {...settings}>
                        <ServiceWeddings />
                        <ServiceLighting />
                        <ServiceParties />
                    </Slider>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <ServiceWeddings />
                    <ServiceLighting />
                    <ServiceParties />
                </MediaQuery>
            </div>
        );
    }
}

export default Services;