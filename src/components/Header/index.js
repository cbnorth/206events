import React, { Component } from 'react';
import './header.scss';

import Sticky from 'react-sticky-el';
import classNames from 'classnames';
import Nav from '../Nav';

import logo from '../../images/logo-white.png';

import background1 from '../../images/header/206-header1.jpg';
import background2 from '../../images/header/206-header2.jpg';
import background3 from '../../images/header/206-header3.jpg';
import background4 from '../../images/header/206-header4.jpg';
import background5 from '../../images/header/206-header5.jpg';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foobar: false,
            currentCount: 1,
        }
    };

    componentDidMount() {
        const intervalId = setInterval(this.timer, 20000);
        this.setState({
            intervalId: intervalId
        });
     }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    timer = () => {
        // setState method is used to update the state
        const newState  = this.state.currentCount === 5 ? 1 : this.state.currentCount + 1;
        this.setState({
            foobar: !this.state.foobar,
            currentCount: newState,
        });
    }

    render() {
        let currentLockup;
        let nextLockup;
        let loadNext;

        switch (this.state.currentCount) {
            //odd
            case 1:
                currentLockup = background1;
                nextLockup = background1;
                loadNext = background2;
                break;
            //even
            case 2:
                currentLockup = background2;
                nextLockup = background2;
                loadNext = background3;
                break;
            //odd
            case 3:
                currentLockup = background3;
                nextLockup = background3;
                loadNext = background4;
                break;
            //even
            case 4:
                currentLockup = background4;
                nextLockup = background4;
                loadNext = background5;
                break;
            //odd
            case 5:
                currentLockup = background5;
                nextLockup = background5;
                loadNext = background1;
                break;
            default:
                currentLockup = background1;
                nextLockup = background2;
                loadNext = background3;
        }

        const currentLockupStyle = {
            backgroundImage: `url(${currentLockup})`,
        };

        const nextLockupStyle = {
            backgroundImage: `url(${nextLockup})`,
        };

        const preLoadStyle = {
            backgroundImage: `url(${loadNext})`,
            display: `none`,
        };

        let currentClass = classNames({
            'header-background-image': true,
            //if even
            'active': this.state.foobar,
            //if odd
            'inactive': !this.state.foobar,
        });

        let nextClass = classNames({
            'header-background-image': true,
            //if even
            'active': !this.state.foobar,
            //if odd
            'inactive': this.state.foobar,
        });


        return (
            <header className="header">
                <div className={currentClass} role="presentation" tabIndex="-1" style={currentLockupStyle}></div>
                <div className={nextClass} role="presentation" tabIndex="-1" style={nextLockupStyle}></div>
                <div role="presentation" tabIndex="-1" style={preLoadStyle}></div>
                <div className="logo"><img src={logo} alt="206 Events logo" /></div>
                <Sticky>
                    <Nav />
                </Sticky>
            </header>
        );
    }
}

//14, 18. 31, 75

export default Header;