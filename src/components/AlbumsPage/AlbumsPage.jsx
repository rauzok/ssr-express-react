import React from 'react';
import { useSelector } from "react-redux";
import {Card} from "antd";

const AlbumsPage = () => {
    const albumsList = useSelector(state => state.list);

    return (
        <>
            <h1 style={{marginBottom: '50px', textAlign: "center"}}>Albums</h1>

            <div style={{display: 'flex', gap: '50px', flexWrap: 'wrap'}}>
                {albumsList.map(album => (
                    <Card key={album.id} title={album.title}>
                        {album.body}
                    </Card>
                ))}
            </div>
        </>
    );
};

export default AlbumsPage;
