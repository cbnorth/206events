import React, { Component } from 'react';
// import logo from './logo.svg';
import './app.scss';
import './settings/slider.scss';

import Header from './components/Header';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Pros from './components/Pros';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section id="about">
            <article className="content-container two-column-text">
              <p>206 Events is a Production and Entertainment Company serving the Greater Puget Sound Area. Providing award winning show management, disc jockey and emcee services, and lighting design to create spectacular weddings, corporate galas, holiday celebrations, and parties for all occassions.</p><p> With over two decades of experience, 206 Events will guarantee your guests have a time to remember. Our team of professionals are highly committed to customer service and will work with you to create spectacular and professional results. Let 206 Events create the solution for your next event!</p>
            </article>
          </section>
          <section id="services" className="dark-background no-padding">
            <article className="content-container">
              <Services />
            </article>
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="awards" className="med-background">
            <Awards />
          </section>
          <section id="gallery" className="dark-background">
            <Gallery />
          </section>
          <section id="contact">
            <div className="contact content-container">
              <h1>Contact us for pricing and availability</h1>
              <iframe src="https://hello.dubsado.com:443/public/form/view/5b98038e2e388126ea2c13ae" frameBorder={0} width="100%" height={750} />
            </div>
          </section>
          <section id="recommended-pros" className="med-background">
            <div className="content-container">
              <Pros />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
