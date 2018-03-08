import React, { Component } from 'react';
import logo from './the_ambassadors_logo.svg';
import mockup from './mock-up.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Lab</h1>
        </header>
        <main className="App-intro">
          <section>
            <h1>Briefing</h1>
            <p>
              We want to build small photo stream prototype in React.
              It needs to load photos from a rest endpoint
              and display them in a feed.
            </p>
            <p>
              Since we do not have a backend (yet) we will
              use fake data from <a href="https://jsonplaceholder.typicode.com/photos?_start=0&_end=10">JsonPlaceholder</a>
            </p>

            <ul>
              <li>Each photo should display with its title overlayed</li>
              <li>Each photo should have a (fake) "like" button</li>
              <li>Initially the app should only load 3 photos</li>
              <li>Users should be able to load more photos</li>
              <li>Feel free to add your own requirements</li>
            </ul>
            <p>
              Good luck!
            </p>
          </section>
          <figure>
            <figcaption>
              <small>Mock up of the app</small>
            </figcaption>
            <img src={mockup} alt="a wireframe mockup showing a picture feed" />
          </figure>
        </main>
      </div>
    );
  }
}

export default App;
