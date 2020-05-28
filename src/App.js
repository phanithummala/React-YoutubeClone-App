import React from 'react';
import {Grid} from '@material-ui/core';
import Youtube from './api/youtube';
import {SearchBar,VideoList,VideoDetail} from './components';

class App extends React.Component{

    state={
        videos:[],
        selectedVideo:null
    }

    handleSubmit= async (searchTerm)=>{
        
        const response=await Youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:process.env.REACT_APP_API_KEY,
                q:searchTerm
            }
        });
        
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
        
    }
    componentDidMount(){
        this.handleSubmit("javscript");
    }
    onVideoSelect=(video)=>{
        
        this.setState({selectedVideo:video});
    }

    render(){
        const {selectedVideo,videos}=this.state;
        return(
            <Grid container spacing={10} justify="center">
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList VideoList={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default App;