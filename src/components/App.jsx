import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import PostsPage from "./PostsPage/PostsPage";
import AlbumsPage from "./AlbumsPage/AlbumsPage";
import '../client/styles.css'

const App = () => {
    return (
        <div style={{padding: '2% 5%', backgroundColor: '#F0F2F5FF'}}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users/:userId/posts" element={<PostsPage />} />
                <Route path="/users/:userId/albums" element={<AlbumsPage />} />
            </Routes>
        </div>
  );
};

export default App;
