import React, { Component } from 'react';

import './footer.scss';

import troy from '../../images/footer/206-footer-image.jpg';
import weddingwire from '../../images/footer/WeddingWire-icon.png';
import yelp from '../../images/footer/Facebook-icon.png';
import facebook from '../../images/footer/Yelp-icon.png';

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
                        <a href="https://www.weddingwire.com/biz/206-events-seattle/430f0084a64cd9f0.html" target="_blank" className="social-link">
                            <img src={weddingwire} alt="206 events on wedding wire" />
                            <span>Wedding Wire</span>
                        </a>
                        <a href="https://www.yelp.com/biz/206-events-seattle-2" target="_blank" className="social-link">
                            <img src={yelp} alt="206 events on Yelp" />
                            <span>Yelp</span>
                        </a>
                        <a href="https://www.facebook.com/206eventsdj" target="_blank" className="social-link">
                            <img src={facebook} alt="206 events on facebook" />
                            <span>Facebook</span>
                        </a>
                    </div>
                    <p className="copyright">Copyright 2018. 206 Events. All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;