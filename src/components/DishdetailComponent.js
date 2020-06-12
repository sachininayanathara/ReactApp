import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if (comments != null){
            return(
                <div>
                    <h4>Comments</h4>
                </div>,
                comments.map((comment)=>{
                    return(
                        <div id={comment.id}>                          
                            <ul class = "list-unstyled">
                                <li>{comment.comment}</li><br/>
                                <li>-- {comment.author}</li>
                            </ul>
                        </div>
                    );
                })               
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    function DishDetail(props) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                         <RenderDish dish ={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {props.dish?<RenderComments comments ={props.dish.comments}/>:<div></div>}
                        {/* if(this.props.var!=Null){
                            return this.renderComments(this.props.var.comments)
                        }ELSE{
                            return <div></div>
                        } */}
                    </div>
                </div>
            </div>
        );
    }

export default DishDetail;

