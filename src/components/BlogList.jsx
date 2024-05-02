import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 

const BlogList = ({list}) => {
    return (
        <div className='row'>

            {
              list.map((item,index)=>{
                 return(
                        <div className='col-md-3 my-3' key={index}>
                            <Link className='nav-link' to={`/details/${item.id}`}>
                            <Card>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.short}</Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                 )
              })
            }
            
        </div>
    );
};

export default BlogList;