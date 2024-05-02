import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogList from '../components/BlogList'
import Loader from '../components/Loader'


const PostByCategory = () => {
    const [blogList ,setBlogList] = useState(null)
    const {categoryID} = useParams()

    useEffect(()=>{
          (async()=>{
                 const res = await axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${categoryID}`)
                 setBlogList(res.data)
          })()
    },[categoryID])
    return (
        <Layout>
             <div className="container">
                 {blogList===null?<Loader/>:<BlogList list={blogList}/>}    
           </div>
        </Layout>
    );
};

export default PostByCategory;