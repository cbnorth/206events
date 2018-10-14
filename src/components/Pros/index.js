import React, { Component } from 'react';
import './pros.scss';

import Pro from './Pro.js';

class Pros extends Component {
    render() {
        return (
            <div className="recommended-pros">
                <h1>Recommended Pros</h1>
                <div className="pros-list">
                    <Pro pro={"A. Renee Weddings & Events"} info={"Couples are drawn to us for our details obsession, eye for design, and authentic vibe. We treat you like a friend and your Big Day like it's our own. "} />
                    <Pro pro={"Manette Gracie Events"} info={"If you are looking for a genuine, down-to-earth, creative, and fun team or coordinators, your search has ended. We offer a very personalized service that is unmatched in the wedding industry."} />
                    <Pro pro={"VOWS Wedding & Event Planning"} info={"VOWS makes you and your wedding a top priority by booking only one event per weekend to ensure your special day gets the quality customer service and attention it deserves. "} />
                    <Pro pro={"Taylor'd Events Group"} info={"From a platinum wedding to the most intimate outdoor ceremony, we enjoy the entire process of planning your wedding so that everything unfolds flawlessly. "} />
                    <Pro pro={"Foodz Catering"} info={"As a caterer, we deliver a powerful and artistic experience, characterized by flavorful tastes and visual appeal, balanced by thoughtful, personalized touches."} />
                </div>
            </div>
        );
    }
}

export default Pros;