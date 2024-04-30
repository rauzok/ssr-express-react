import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import AlumsPostsPage from "./AlumsPostsPage/AlumsPostsPage";

const App = () => {
    return (
        <div style={{padding: '2% 5%', backgroundColor: '#F0F2F5FF'}}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users/:userId/posts" element={<AlumsPostsPage />} />
                <Route path="/users/:userId/albums" element={<AlumsPostsPage />} />
            </Routes>
        </div>
  );
};

export default App;
