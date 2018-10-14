import React, { Component } from 'react';
// import logo from './logo.svg';
import './nav.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

const Menu = ({ items, className, onClick }) => (
  <div className={className}>
    <Scrollspy items={items} currentClassName="current">
      {items.map((item, i) => <AnchorLink href={`#${item}`} key={i} onClick={onClick} offset='50'>{item}</AnchorLink>)}
    </Scrollspy>
	</div >
)

class Nav extends Component {
  // componentDidMount(){
  //   let highlightMenuItem;
  //   window.addEventListener('scroll', (event) => {
  //     console.log(window.scrollY);
  //      if(window.scrollY > 500) {
  //         highlightMenuItem = 'top';
  //      } else {
  //         highlightMenuItem = 'normal';
  //      }
  //      this.setState({
  //         activeClass: highlightMenuItem,
  //      });
  //   });
  // }

  render() {
    return (
      <nav className="navigation">
        <Menu items={["services", "reviews", "gallery", "contact"]} className="menu-items" onClick={this._handleMenuClick} />
      </nav>
    );
  }
}

export default Nav;