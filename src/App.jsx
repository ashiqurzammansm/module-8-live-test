import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
};

export default App;
