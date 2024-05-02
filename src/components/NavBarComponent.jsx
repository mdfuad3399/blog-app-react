import React, { useEffect, useState } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import axios from 'axios';

const NavBarComponent = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        (async()=>{
             const res = await axios.get("https://basic-blog.teamrabbil.com/api/post-categories")
             setData(res.data)
        })()
    },[])
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary p-3">
            <Container>
                <Navbar.Brand href="#">ব্লগ</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <NavLink className="nav-link" to='/'>হোম</NavLink>
                        {data && data.map((item,index)=>{
                            return<div key={index.toString()}><NavLink className='nav-link' to={"/byCategory/"+item.id}>{item.name}</NavLink></div>
                            })
                        }      
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div>
                
            </div>
        </div>
    );
};

export default NavBarComponent;