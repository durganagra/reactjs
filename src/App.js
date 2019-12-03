import React from 'react';
import Component from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Navbar dark color="primary">
          <div className="conatiner">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>

        </Navbar>
      </div>
    )
  };
}
export default App;
