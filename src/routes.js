import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import SinglePost from './pages/SinglePost';

const Router = () => (
    <BrowserRouter>
        <Routes>      
            <Route exact path="/" element={<AllPosts/>} />
            <Route path="/:id" element={<SinglePost/>} />
        </Routes>
    </BrowserRouter>

);

export default Router;
