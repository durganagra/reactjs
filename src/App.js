import React from 'react';
import Component from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes';
import DishdetailComponent from './Components/DishdetailComponent';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES
    };
  }
  render() {
    return (
      <div class="App">
        <Navbar dark color="primary">
          <div className="conatiner">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
        <DishdetailComponent dishes={this.state.dishes}/>
      </div>
    )
  };
}
export default App;
