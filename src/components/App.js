import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = {
        videos: []
    }
    onSearchSubmit = async search => {
        const request = await youtube.get('/search', {
            q: search
        })
        this.setState({
            videos: request.data.items
        });
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;