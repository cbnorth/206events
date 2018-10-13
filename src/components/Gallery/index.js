import React, { Component } from 'react';
import './gallery.scss';

import Slider from "react-slick";

class Gallery extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
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
            <div className="content-container">
                <h1> Gallery</h1>
                <Slider {...settings}>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                    <div className="slide"><img src="https://i.ytimg.com/vi/_tHk20IR7MQ/maxresdefault.jpg" /></div>
                </Slider>
            </div>
        );
    }
}

export default Gallery;