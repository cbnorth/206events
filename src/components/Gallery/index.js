import React, { Component } from 'react';
import './gallery.scss';

import Slider from "react-slick";

import gallery1 from '../../images/gallery/206-gallery01.jpg';
import gallery2 from '../../images/gallery/206-gallery02.jpg';
import gallery3 from '../../images/gallery/206-gallery03.jpg';
import gallery4 from '../../images/gallery/206-gallery04.jpg';
import gallery5 from '../../images/gallery/206-gallery05.jpg';
import gallery6 from '../../images/gallery/206-gallery06.jpg';
import gallery7 from '../../images/gallery/206-gallery07.jpg';
import gallery8 from '../../images/gallery/206-gallery08.jpg';
import gallery9 from '../../images/gallery/206-gallery09.jpg';
import gallery10 from '../../images/gallery/206-gallery10.jpg';
import gallery11 from '../../images/gallery/206-gallery11.jpg';
import gallery12 from '../../images/gallery/206-gallery12.jpg';
import gallery13 from '../../images/gallery/206-gallery13.jpg';
import gallery14 from '../../images/gallery/206-gallery14.jpg';
import gallery15 from '../../images/gallery/206-gallery15.jpg';
import gallery16 from '../../images/gallery/206-gallery16.jpg';
import gallery17 from '../../images/gallery/206-gallery17.jpg';
import gallery18 from '../../images/gallery/206-gallery18.jpg';
import gallery19 from '../../images/gallery/206-gallery19.jpg';
import gallery20 from '../../images/gallery/206-gallery20.jpg';
import gallery21 from '../../images/gallery/206-gallery21.jpg';
import gallery22 from '../../images/gallery/206-gallery22.jpg';
import gallery23 from '../../images/gallery/206-gallery23.jpg';
import gallery24 from '../../images/gallery/206-gallery24.jpg';

const slides = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24];

class Gallery extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
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

        const galleryItems = slides.map(function(slide, i){
            return <div className="slide" key={i}><img src={slide} key={i} alt="" /></div>
        });

        //TODO: loop create slides from array
        return (
            <div className="gallery content-container">
                <h1>Gallery</h1>
                <Slider {...settings}>
                    {galleryItems}
                </Slider>
            </div>
        );
    }
}

export default Gallery;