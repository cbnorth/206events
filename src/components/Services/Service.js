import React, { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <div className="service">
                <div className="service-copy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra auctor mauris. Sed euismod sapien a sapien cursus congue. Nam tempus euismod sapien et sodales. Sed bibendum quam non mattis porta. Sed fermentum lacus sit amet velit scelerisque, a molestie tellus vulputate.</p>
                </div>
                <div className="service-image">
                    <img src="https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg" />
                </div>
            </div>
        );
    }
}

export default Service;