import React, { Component } from 'react';
//import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';
// class Menu extends Component {
//     //constructor is invoked when
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedDish: null
//         };
//         console.log('menu component constructor is invoked');
//     }
//     componentDidMount() {
//         //console.log(this.state.selectedDish);
//         console.log('menu component componentdidMount is invoked');
//     }
//     onDishSelect(dish) {
//         this.setState({ selectedDish: dish });
//     }
//     renderDish(dish) {
//         if (dish != null) {
//             return (
//                 <Card>
//                     {/* <CardImg width="100%" src={dish.image} alt={dish.name} /> */}
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>

//                 </Card>
//             );

//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }
//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                      <Card key={dish.id}
//                         onClick={() => this.props.onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });
//        // console.log('menu component render is invoked');
//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <div className="row">
//                 <DishdetailComponent dish={this.state.selectedDish} />
//                 </div>
//             </div>
//         );
//     }
// }

import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

// function RenderMenuItem ({dish, onClick}) {
//     return (
//         <Card>
//             <Link to={`/menu/${dish.id}`} >
//                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//                 <CardImgOverlay>
//                     <CardTitle>{dish.name}</CardTitle>
//                 </CardImgOverlay>
//             </Link>
//         </Card>
//     );
// }


function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default Menu;