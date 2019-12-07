import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';
class Menu extends Component {
    //constructor is invoked when
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log('menu component constructor is invoked');
    }
    componentDidMount() {
        console.log('menu component componentdidMount is invoked');
    }
    onDishSelect(dish){

        this.setState({ selectedDish: dish });
       
    }
   
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
       // console.log('menu component render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                 <DishdetailComponent dish={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}
export default Menu;