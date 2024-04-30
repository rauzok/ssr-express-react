import React from 'react';
import { useSelector } from "react-redux";

const PostsPage = () => {
    const postsList = useSelector(state => state.list);

    return (
        <>
            <h1 style={{marginBottom: '50px', textAlign: "center"}}>Posts</h1>

            <div style={{display: 'flex', gap: '50px', flexDirection: 'column',}}>
                {postsList.map(post => (
                    <div
                        key={post.id}
                        title={post.title}
                        style={{
                            display: 'flex',
                            gap: '50px',
                            flexDirection: 'column',
                            padding: '30px',
                            margin: '50px 0',
                            backgroundColor: '#E7E9EB'
                        }}
                    >
                        <div>{post.title}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PostsPage;
