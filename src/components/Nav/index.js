import React, { Component } from 'react';
import './nav.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Scrollspy from 'react-scrollspy';
import MediaQuery from 'react-responsive'

const SERVICESNAV = "services & events"

const Menu = ({ items, className, onClick, currentNav }) => (
  <div className={className}>
    {items.map((item, i) => {
      let navItem = (item === SERVICESNAV || item === "services") ? "events-services" : item;
      return <AnchorLink className={currentNav === navItem && "current"} href={`#${navItem}`} key={i} onClick={onClick} offset='50'>{item}</AnchorLink>
    })
    }
  </div >
)

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

let events;
let reviews;
let gallery;
let contact;

class Nav extends Component {
  state = {
    activeClass: null,
  }
  componentDidMount() {
    let highlightMenuItem;
    this.getOffsets();
    window.addEventListener("resize", this.getOffsets);
    window.addEventListener('scroll', (event) => {
      if (window.scrollY >= events && window.scrollY < reviews) {
        highlightMenuItem = "events-services"
      } else if (window.scrollY >= reviews && window.scrollY < gallery) {
        highlightMenuItem = "reviews"
      } else if (window.scrollY >= gallery && window.scrollY < contact) {
        highlightMenuItem = "gallery"
      } else if (window.scrollY > contact) {
        highlightMenuItem = "contact"
      }
      this.setState({
        activeClass: highlightMenuItem,
      });
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', false);
    window.removeEventListener('resize', false);
  }

  getOffsets = () => {
    events = getOffset(document.getElementById('events-services')).top - 60;
    reviews = getOffset(document.getElementById('reviews')).top - 60;
    gallery = getOffset(document.getElementById('gallery')).top - 60;
    contact = getOffset(document.getElementById('contact')).top - 60;
  }

  render() {
    return (
      <nav className="navigation">
        <MediaQuery query="(max-width: 767px)">
          <Menu items={["services", "reviews", "gallery", "contact"]} className="menu-items" onClick={this._handleMenuClick} currentNav={this.state.activeClass} />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <Menu items={[SERVICESNAV, "reviews", "gallery", "contact"]} className="menu-items" onClick={this._handleMenuClick} currentNav={this.state.activeClass} />
        </MediaQuery>
      </nav>
    );
  }
}

export default Nav;