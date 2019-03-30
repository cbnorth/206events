import React, { Component } from 'react';
import './gallery.scss';

import Slider from "react-slick";

import gallery2 from '../../images/gallery/206-gallery02.jpg';
import gallery3 from '../../images/gallery/206-gallery03.jpg';
import gallery4 from '../../images/gallery/206-gallery04.jpg';
import gallery5 from '../../images/gallery/206-gallery05.jpg';
import gallery6 from '../../images/gallery/206-gallery06.jpg';
import gallery10 from '../../images/gallery/206-gallery10.jpg';
import gallery16 from '../../images/gallery/206-gallery16.jpg';
import gallery18 from '../../images/gallery/206-gallery18.jpg';
import gallery20 from '../../images/gallery/206-gallery20.jpg';
import gallery21 from '../../images/gallery/206-gallery21.jpg';
import gallery22 from '../../images/gallery/206-gallery22.jpg';
import gallery23 from '../../images/gallery/206-gallery23.jpg';
import gallery24 from '../../images/gallery/206-gallery24.jpg';
import gallery25 from '../../images/gallery/annbri_alante_LC2_1912.jpg';
import gallery26 from '../../images/gallery/sardar_alante__C2_0362.jpg';
import gallery27 from '../../images/gallery/sardar_alante__C2_0766.jpg';
import gallery28 from '../../images/gallery/sardar_alante__P2_9161.jpg';
import gallery29 from '../../images/gallery/sardar_alante_KP1_8954.jpg';


const slides = [gallery2, gallery3, gallery4, gallery5, gallery6, gallery26, gallery29, gallery28, gallery10, gallery25, gallery27, gallery16, gallery18, gallery20, gallery21, gallery22, gallery23, gallery24];

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

        return (
            <div className="gallery content-container">
                <h1>Gallery</h1>
                <Slider {...settings}>
                    {galleryItems}
                </Slider>
                <div className="photographer-credits">
                    <h3>Photographer credits</h3>
                    <div className="photographer-credits-wrapper">
                        <a href="https://www.hazelmariephoto.com/" target="_blank">Hazel Marie Photo</a>
                        <a href="https://www.AlantePhotography.com" target="_blank">Alante Photography</a>
                        <a href="https://www.carolharroldphotography.com/" target="_blank">Carol Harrold Photography</a>
                        <a href="http://www.carinaskrobecki.com/" target="_blank">Carina Skrobecki Photography</a>
                        <a href="https://www.maxandsamphoto.com" target="_blank">Max &amp; Sam Photography</a>
                        <a href="https://www.Sashareiko.com" target="_blank">Sasha Reiko</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;