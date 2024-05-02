import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import PostByCategory from './pages/PostByCategory'
import Details from './pages/Details'

const App = () => {
  return (
    <div>
      <BrowserRouter>
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/byCategory/:categoryID' element={<PostByCategory/>}/>
                <Route path='/details/:postID' element={<Details/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
