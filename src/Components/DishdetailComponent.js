import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class DishdetailComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedDish: null
        };
        //console.log('menu component constructor is invoked');
    }
    componentDidMount() {
        console.log(this.props.dish);
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>

                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <Card>
                        <CardBody>
                        <CardTitle>Comments}</CardTitle>
                            <CardText>
                                <div>
                                    <p>Imagine all the eatbles,living in conFusion!</p>
                                    <p>-- John Lemon, Oct 17,2012</p>
                                    <p>Sends anyone to heaven, I wish I could get my mother-in-law to eat it!</p>
                                    <p>--Paul McVites,Sep 06,2014</p>
                                    <p>Eat it, Just eat it!</p>
                                </div>
                            </CardText>
                        </CardBody>

                    </Card>
                </div>
                </div>
              
            </div>
              
                
              


            );

        }
        else {
            return (
                <div></div>
            );
        }

        //    return(
        //     <div  className="col-12 col-md-5 m-1">
        //     {/* <Card >
        //         <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
        //         <CardImgOverlay>
        //             <CardTitle>{this.props.dish.name}</CardTitle>
        //         </CardImgOverlay>
        //     </Card> */}
        // </div>
        //    );
    }
}
export default DishdetailComponent;