import React from 'react';
import { useSelector } from "react-redux";

const AlumsPostsPage = () => {
    const list = useSelector(state => state.list);
    const title = useSelector(state => state.title);

    return (
        <>
            <h1 style={{marginBottom: '50px', textAlign: "center", textTransform: 'capitalize'}}>{title}</h1>

            {
                list?.length
                    ?
                        <div style={{display: 'flex', gap: '20px', flexDirection: 'column',}}>
                            {list.map(post => (
                                <div
                                    key={post.id}
                                    title={post.title}
                                    style={{
                                        display: 'flex',
                                        gap: '20px',
                                        flexDirection: 'column',
                                        padding: '20px',
                                        margin: '20px 0',
                                        backgroundColor: '#E7E9EB'
                                    }}
                                >
                                    <div>{post.title}</div>
                                </div>
                            ))}
                        </div>
                    : null
            }
        </>
    );
};

export default AlumsPostsPage;
