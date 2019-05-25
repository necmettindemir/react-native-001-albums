import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';



class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        //console.log('component will mount in AlbumList');
        //debugger;
        const url = 'https://rallycoding.herokuapp.com/api/music_albums';
        
        axios.get(url).then(
            resp => { 
                //console.log(resp); 
                this.setState({ albums: resp.data });
                //console.log(this.state.albums); 
            }
        );
    }

    redenrAlbums() {
        return this.state.albums
        .map((album) => 
        { 
            return (
             //<Text key={album.title}>{album.title}</Text>
             <AlbumDetail key={album.title} album={album} />
            );     
        });
    }

    render() { 

        console.log('render : ', this.state);

        return (
            <ScrollView>
                { this.redenrAlbums() }
            </ScrollView>
        );
    }
    
}


export default AlbumList;
