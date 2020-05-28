import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem'

function VideoList({VideoList,onVideoSelect}) {

    const videos=VideoList.map((video,id)=>{
        return <VideoItem key={id} video={video} onVideoSelect= { onVideoSelect}/>
    });

    
    return (
        
        <Grid container spacing={10}>{videos}</Grid>
        
        );
    
}

export default VideoList
