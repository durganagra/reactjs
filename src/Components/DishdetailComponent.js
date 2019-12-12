import React, { Component } from 'react';
//import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// const comments = {
//     list: {
//         list1: 'Imagine all the eatbles,living in conFusion ',
//         list2: '--john lemon,',
//         list3: 'Send anyone to heaven,I wish I could get my mother-in-law to eat it!',
//         list4: '--Paul McVites',
//         list5: 'Eat it, just eat it! ',
//         list6: '--Michael Jaikishan',
//         list7: ' Ultimate,reaching for the stars! ',
//         list8: '--ringo Starry',
//         list9: 'Its your birthday,were gonna party!',
//         list10: '--25 Cent'

//     },
//     Dates: {
//         Date1: 'Oct17,2012',
//         Date2: 'Sep 04, 2014',
//         Date3: 'feb 14, 2015',
//         Date4: 'Dec 03, 2015',
//         Date5: 'Dec 03, 2011'
//     }
// }
// class DishdetailComponent extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             selectedDish: null
//         };
//         //console.log('menu component constructor is invoked');
//     }
//     componentDidMount() {
//         console.log(this.props.dish);
//     }

//     render() {
//         if (this.props.dish != null) {
//             return (
//                 <div className="container">
//                 <div className="row">
//                 <div className="col-12 col-md-5 m-1">
//                     <Card>
//                         <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
//                         <CardBody>
//                             <CardTitle>{this.props.dish.name}</CardTitle>
//                             <CardText>{this.props.dish.description}</CardText>
//                         </CardBody>

//                     </Card>
//                 </div>
//                 <div className="col-12 col-md-5 m-1">
//                 <Card>
//                         <CardBody>
//                         <CardTitle>Comments</CardTitle>
//                             <CardText>
//                                 <div>
//                                  <ul class="list-unstyled">
//                                      <li>{comments.list.list1}</li>
//                                      <li>{comments.list.list2},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.Dates.Date1)))} </li>
//                                      <li>{comments.list.list3}</li>
//                                      <li>{comments.list.list4}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.Dates.Date2)))} </li>
//                                      <li>{comments.list.list5}</li>
//                                      <li>{comments.list.list6}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.Dates.Date3)))} </li>
//                                      <li>{comments.list.list7}</li>
//                                      <li>{comments.list.list8},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.Dates.Date4)))} </li>
//                                      <li>{comments.list.list9}</li>
//                                      <li>{comments.list.list10},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.Dates.Date5)))} </li>
//                                  </ul>
//                                 </div>
//                             </CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//                 </div>      
//             </div>
//             );

//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }
// }

// import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle
// } from 'reactstrap';
function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>

            </Card>
        );

    }
    else {
        return (
            <div></div>
        );
    }

}

function RenderComments({ comments }) {
    return (
        <Card>
            <CardBody>
                {/* <CardTitle>Comments</CardTitle> */}
                <CardText>
                    {comments}
                    <div>
                        {/* <ul class="list-unstyled">
                                            <li>{comments.list.list1}</li>
                                            <li>{comments.list.list2},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.Dates.Date1)))} </li>
                                            <li>{comments.list.list3}</li>
                                            <li>{comments.list.list4}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.Dates.Date2)))} </li>
                                            <li>{comments.list.list5}</li>
                                            <li>{comments.list.list6}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.Dates.Date3)))} </li>
                                            <li>{comments.list.list7}</li>
                                            <li>{comments.list.list8},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.Dates.Date4)))} </li>
                                            <li>{comments.list.list9}</li>
                                            <li>{comments.list.list10},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.Dates.Date5)))} </li>
                                        </ul> */}
                    </div>
                </CardText>
            </CardBody>
        </Card>
    );
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>);
    }

}

export default DishDetail;
//export default DishdetailComponent;