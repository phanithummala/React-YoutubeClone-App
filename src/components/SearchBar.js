import React, { Component } from 'react';
import {Paper, TextField} from '@material-ui/core';

export class SearchBar extends Component {
    state={
        searchItem:""
    }

    handleChange=(e)=>{
        this.setState({searchItem:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {searchItem}=this.state;
        const {onFormSubmit}=this.props;
        
        onFormSubmit(searchItem);

        
    }

    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={(e) => this.handleSubmit(e) }>
                    <TextField fullWidth label="Search Here" onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar
