import React, { Component } from 'react';
import './nav.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import MediaQuery from 'react-responsive'

const SERVICESNAV = "services & events"

const Menu = ({ items, className, onClick }) => (
  <div className={className}>
    <Scrollspy items={items} currentClassName="current" offset={ 510 }>
      {items.map((item, i) => {
        let navItem = (item === SERVICESNAV || item === "services") ? "events-services" : item;
        return <AnchorLink href={`#${navItem}`} key={i} onClick={onClick} offset='50'>{item}</AnchorLink>
      })
      }
    </Scrollspy>
  </div >
)

function getOffset( el ) {
  var _x = 0;
  var _y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

class Nav extends Component {
  componentDidMount(){
    const events = getOffset( document.getElementById('events-services') ).top;
    const reviews = getOffset( document.getElementById('reviews') ).top;
    const gallery = getOffset( document.getElementById('gallery') ).top;
    const contact = getOffset( document.getElementById('contact') ).top;
    console.log(events, reviews, gallery, contact);
    let highlightMenuItem;
    window.addEventListener('scroll', (event) => {
      console.log(window.scrollY);
      switch(window.scrollY) {
        case 714:
            highlightMenuItem = 'foo'
            break;
        case 2500:
            highlightMenuItem = 'bar'
            break;
        default:
            highlightMenuItem = 'foobar'
      }
       this.setState({
          activeClass: highlightMenuItem,
       });
    });
  }

  render() {
    return (
      <nav className="navigation">
        <MediaQuery query="(max-width: 767px)">
          <Menu items={["services", "reviews", "gallery", "contact"]} className="menu-items" onClick={this._handleMenuClick} />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <Menu items={[SERVICESNAV, "reviews", "gallery", "contact"]} className="menu-items" onClick={this._handleMenuClick} />
        </MediaQuery>
      </nav>
    );
  }
}

export default Nav;