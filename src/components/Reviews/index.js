import React, { Component } from "react";
import Slider from "react-slick";

export default class Reviews extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
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
                <h1>Reviews</h1>
                <Slider {...settings}>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra auctor mauris. Sed euismod sapien a sapien cursus congue. Nam tempus euismod sapien et sodales. Sed bibendum quam non mattis porta. Sed fermentum lacus sit amet velit scelerisque, a molestie tellus vulputate. </p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra auctor mauris. Sed euismod sapien a sapien cursus congue. Nam tempus euismod sapien et sodales. Sed bibendum quam non mattis porta. Sed fermentum lacus sit amet velit scelerisque, a molestie tellus vulputate. </p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra auctor mauris. Sed euismod sapien a sapien cursus congue. Nam tempus euismod sapien et sodales. Sed bibendum quam non mattis porta. Sed fermentum lacus sit amet velit scelerisque, a molestie tellus vulputate. </p>
                    </div>
                </Slider>
            </div>
        );
    }
}
