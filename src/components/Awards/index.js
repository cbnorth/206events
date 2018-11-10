import React, { Component } from 'react';

import './awards.scss';

class Awards extends Component {
    render() {
        return (
            <div className="awards">
                <div className="content-container centered-text">
                    <div className="awards-images">
                        <img src="https://cdn1.weddingwire.com/assets/img/en_US/badges/2018-en_US.png" className="wedding-wire-award" alt="206 Events, 2018 Wedding Wire Couples Choice" />
                        <img src="https://cdn1.weddingwire.com/assets/img/en_US/badges/2017-en_US.png" className="wedding-wire-award" alt="206 Events, 2018 Wedding Wire Couples Choice" />
                        <img src="https://cdn1.weddingwire.com/assets/img/en_US/badges/2016-en_US.png" className="wedding-wire-award" alt="206 Events, 2018 Wedding Wire Couples Choice" />
                        <img src="https://cdn1.weddingwire.com/assets/img/en_US/badges/2015-en_US.png" className="wedding-wire-award" alt="206 Events, 2018 Wedding Wire Couples Choice" />
                        <img src="https://cdn1.weddingwire.com/assets/img/en_US/badges/2014-en_US.png" className="wedding-wire-award" alt="206 Events, 2018 Wedding Wire Couples Choice" />
                    </div>
                    <p>206 Events is proud to have been awarded WeddingWire's Couples Choice Awards for our exceptional service and customer ratings for the past 5 years in a row. Thank you to all of our clients who helped us reach this achievement!</p>
                </div>
            </div>
        );
    }
}

export default Awards;