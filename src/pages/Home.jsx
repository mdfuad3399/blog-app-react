import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import axios from 'axios';
import Loader from '../components/Loader';

const Home = () => {
    const [blogList ,setBlogList] = useState(null)

    useEffect(()=>{
         
        (async()=>{
           const res = await axios.get("https://basic-blog.teamrabbil.com/api/post-newest")
           setBlogList(res.data)
        })()

    },[])
    return (
        <Layout>
           <div className="container">
                 {blogList===null?<Loader/>:<BlogList list={blogList}/>}    
           </div>
        </Layout>
    );
};

export default Home;