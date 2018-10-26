import React, { Component } from "react";
import Slider from "react-slick";
import './reviews.scss';

export default class Reviews extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            dots: true,
            responsive: [
                {
                    breakpoint: 760,
                    dots: true,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="reviews content-container centered-text">
                <h1>What clients say bbout us</h1>
                <Slider {...settings}>
                    <div>
                        <p className="review">I can't say enough wonderful things about 206 Events!  Troy is the most amazing combination of personable and professional. With attention to detail, flexibility and the ability to understand the needs of a group, we could not have been more impressed with Troy as a DJ and essentially facilitator for our wedding and reception... I truly did not have to think about what came next and was able to enjoy every minute of the wedding as a result. Thank you for your genuine care for us, and for showing us and our guests an amazing time! <br />
                        <em><a href="https://www.yelp.com/biz/206-events-seattle-2?hrid=nVL1MwehIlZygl13pmbkaw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Danielle G., Married August 2018</a></em>
                        </p>
                    </div>
                    <div>
                        <p className="review">We really appreciated how well Troy read the room and chose tracks perfect for whatever was going on--he even caught notice of us having our first look while he was setting up, and played our first dance song for us then—it was such a wonderful way to add even more magic to the moment! After our wedding, he provided us with a Spotify playlist of all of the songs he used—we can now enjoy our wedding's music whenever we want. Really can't recommend Troy highly enough—total pro and a real class act.<br/>
                        <em>Samantha &amp; David, Married August 2016</em>
                        </p>
                    </div>
                    <div>
                        <p className="review">We hired Troy and 206 Events for a big birthday party. He did a great job, we'd highly recommend him if you need some party/wedding tunage needs. He was very prompt in our initial contacts and has a pretty slick online contract system. He was also very receptive to hearing what sort of music/bands/songs we wanted to hear... When we were first planning, the location we were using had a sound system and I was just thinking of bringing in an iPad with a playlist. I'm really glad we hired Troy instead! <br />
                        <em><a href="https://www.yelp.com/biz/206-events-seattle-2?hrid=90COfEBOGQxeDSQyE4e8PA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank">Mark S, March 2017</a></em>
                        </p>
                    </div>
                </Slider>
            </div>
        );
    }
}
