import React, { Component } from 'react';

import './footer.scss';

import troy from '../../images/footer/206-footer-image.jpg';
import weddingwire from '../../images/footer/WeddingWire-icon.png';
import facebook from '../../images/footer/Facebook-icon.png';
import yelp from '../../images/footer/Yelp-icon.png';

const SocialLink = ({link, imageSource, altText, title}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="social-link">
        <img src={imageSource} alt={altText} />
        <span>{title}</span>
    </a>
)
class Footer extends Component {
    render() {
        return (
            <div className="footer content-container">
                <div className="footer-owner-higlight">
                    <img src={troy} alt="Photo of Troy Whalen, owner of 206 events" />
                    <div className="contact-206-events">
                        <p>Troy Whalen <br />Owner of 206 Events</p>
                        <p><a href="mailto:info@206events.com">info@206events.com</a> <br />206.250.3335</p>
                    </div>
                </div>
                <div className="footer-social-and-copy">
                    <div className="social-links">
                        <SocialLink
                            link="https://www.weddingwire.com/biz/206-events-seattle/430f0084a64cd9f0.html"
                            imageSource={weddingwire}
                            altText="206 events on wedding wire"
                            title="Wedding Wire"
                        />
                        <SocialLink
                            link="https://www.yelp.com/biz/206-events-seattle-2"
                            imageSource={yelp}
                            altText="206 events on Yelp"
                            title="Yelp"
                        />
                        <SocialLink
                            link="https://www.weddingwire.com/biz/206-events-seattle/430f0084a64cd9f0.html"
                            imageSource={facebook}
                            altText="206 events on facebook"
                            title="Facebook"
                        />
                        <SocialLink
                            link="https://www.instagram.com/206_events/"
                            imageSource={weddingwire}
                            altText="206 events on instagram"
                            title="Instagram"
                        />
                    </div>
                    <p className="copyright">Copyright 2018. 206 Events. All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;