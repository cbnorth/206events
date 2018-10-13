import React, { Component } from 'react';
// import logo from './logo.svg';
import './app.scss';
import './components/settings/slider.scss';

import Nav from './components/Nav';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Sticky from 'react-sticky-el';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Header</p>
          <Sticky>
            <Nav />
          </Sticky>
        </header>
        <main>
          <section id="about">
            <article className="content-container">
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra auctor mauris. Sed euismod sapien a sapien cursus congue. Nam tempus euismod sapien et sodales. Sed bibendum quam non mattis porta. Sed fermentum lacus sit amet velit scelerisque, a molestie tellus vulputate. Maecenas volutpat at risus non sodales. Sed mattis, lectus ac efficitur ultrices, diam risus gravida ante, non facilisis tortor odio dictum leo. Curabitur viverra fermentum nunc, ac pellentesque leo mollis et. Morbi fringilla commodo dapibus. Donec ornare sit amet nisi posuere posuere. Fusce euismod diam sed nibh tincidunt, sed egestas ligula sollicitudin. Nunc pretium semper orci vitae luctus. Integer ultricies mi mi, et maximus dolor tincidunt malesuada. Suspendisse ut magna volutpat, molestie ante eget, imperdiet arcu..</p>
            </article>
          </section>
          <section id="services">
            <article className="content-container">
              <h1>Services</h1>
              <Services />
            </article>
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="awards">
            <Awards />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="contant">
            <h1>Contact</h1>
            <div className="content-container">
              <iframe src="https://hello.dubsado.com:443/public/form/view/5b98038e2e388126ea2c13ae" frameBorder={0} width="100%" height={750} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
