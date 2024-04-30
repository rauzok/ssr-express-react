import React from 'react';
import { useSelector } from "react-redux";

const AlbumsPage = () => {
    const albumsList = useSelector(state => state.list);

    return (
        <>
            <h1 style={{marginBottom: '50px', textAlign: "center"}}>Albums</h1>

            <div style={{display: 'flex', gap: '50px', flexDirection: 'column'}}>
                {albumsList.map(album => (
                    <div
                        key={album.id}
                        title={album.title}
                        style={{
                            display: 'flex',
                            gap: '50px',
                            flexDirection: 'column',
                            padding: '30px',
                            margin: '50px 0',
                            backgroundColor: '#E7E9EB'
                        }}
                    >
                        <div>{album.title}</div>
                        <div>{album.body}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AlbumsPage;
