import React from 'react';
import { useSelector } from "react-redux";
import {Card} from "antd";

const PostsPage = () => {
    const postsList = useSelector(state => state.list);

    return (
        <>
            <h1 style={{marginBottom: '50px', textAlign: "center"}}>Posts</h1>
            <div style={{width: '100%'}}>
                {postsList.map(post => (
                    <Card key={post.id} title={post.title} style={{ margin: '50px 0'}}>
                        {post.body}
                    </Card>
                ))}
            </div>
        </>
    );
};

export default PostsPage;
