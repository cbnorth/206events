import React, { Component } from 'react';
import './services.scss';

import Service from './Service.js';
import MediaQuery from 'react-responsive'
import Slider from "react-slick";

class Services extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 760,
                    dots: false,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <MediaQuery query="(max-width: 767px)">
                    <Slider {...settings}>
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                    </Slider>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </MediaQuery>
            </div>
        );
    }
}

export default Services;