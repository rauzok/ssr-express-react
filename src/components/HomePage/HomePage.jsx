import React from 'react';
import { useSelector } from "react-redux";

const HomePage = () => {
    const list = useSelector(state => state.list);
    const title = useSelector(state => state.title);

    return (
        <>
            <h1 style={{marginBottom: '50px', textAlign: "center"}}>{title}</h1>

            {
                list?.length
                    ?
                        <div style={{display: 'flex', gap: '50px', flexDirection: 'column',}}>
                            {list?.map(user => (
                                <div key={user.id} style={{display: 'flex', gap: '50px', flexDirection: 'column', padding: '30px', backgroundColor: '#E7E9EB'}}>
                                    <div>{user.name}</div>

                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <a href={`/users/${user.id}/posts`}>Posts</a>
                                        <a href={`/users/${user.id}/albums`}>Albums</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :   null
            }
        </>
    );
};

export default HomePage;
