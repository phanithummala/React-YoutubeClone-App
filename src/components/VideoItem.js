import React from 'react';
import { Paper, Grid,Typography} from '@material-ui/core';

function VideoItem({ video, onVideoSelect }) {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }}  onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" style={{ marginRight :"20px"}}/>
            <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem
