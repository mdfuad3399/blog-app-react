import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogDetails from '../components/BlogDetails'
import Loader from '../components/Loader'

const Details = () => {
    const [blogDetails ,setBlogDetails] = useState(null)
    const {postID} = useParams()

    useEffect(()=>{
          (async()=>{
                 const res = await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${postID}`)
                 setBlogDetails(res.data)
          })()
    },[postID])
    return (
        <Layout>
             <div className='container'>
             {blogDetails===null?<Loader/>:<BlogDetails list={blogDetails}/>}    
             </div>
        </Layout>
    );
};

export default Details;