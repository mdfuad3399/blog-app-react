import React from 'react';
import {Card} from 'react-bootstrap';


const BlogDetails = ({list}) => {
    return (
        <div className='row'>
            {
               Object.values(list).map((item,index)=>{
                   return(
                     <div className='col-md-12 my-3' key={index}>
                          <Card>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.content}</Card.Text>
                                </Card.Body>
                            </Card>
                     </div>
                   )
                })
            }
        </div>
    );
};

export default BlogDetails;