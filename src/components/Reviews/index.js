import React, { Component } from "react";
import Slider from "react-slick";
import './reviews.scss';

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
            <div className="content-container centered-text">
                <Slider {...settings}>
                    <div>
                        <p className="review">We really appreciated how well Troy read the room and chose tracks perfect for whatever was going on--he even caught notice of us having our first look while he was setting up, and played our first dance song for us then—it was such a wonderful way to add even more magic to the moment! After our wedding, he provided us with a Spotify playlist of all of the songs he used—we can now enjoy our wedding's music whenever we want. Really can't recommend Troy highly enough—total pro and a real class act.<br/>
                        <em>Samantha & David, Married August 2016</em>
                        </p>
                    </div>
                    <div>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra auctor mauris. Sed euismod sapien a sapien cursus congue. Nam tempus euismod sapien et sodales. Sed bibendum quam non mattis porta. Sed fermentum lacus sit amet velit scelerisque, a molestie tellus vulputate. </p>
                    </div>
                    <div>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra auctor mauris. Sed euismod sapien a sapien cursus congue. Nam tempus euismod sapien et sodales. Sed bibendum quam non mattis porta. Sed fermentum lacus sit amet velit scelerisque, a molestie tellus vulputate. </p>
                    </div>
                </Slider>
            </div>
        );
    }
}
