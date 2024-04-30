import React from 'react';
import { useSelector } from "react-redux";
import { Card } from "antd";

const HomePage = () => {
    const usersList = useSelector(state => state.list);

    return (
        <>
            <h1 style={{marginBottom: '50px', textAlign: "center"}}>Users</h1>

            {
                usersList?.length
                    ?
                        <div style={{display: 'flex', gap: '50px', flexDirection: 'column'}}>
                            {usersList?.map(user => (
                                <Card key={user.id} title={<div>{user.name}</div>}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <a href={`users/${user.id}/posts`}>Posts</a>
                                        <a href={`users/${user.id}/albums`}>Albums</a>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    :   null
            }
        </>
    );
};

export default HomePage;
