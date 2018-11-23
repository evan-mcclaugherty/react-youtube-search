import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onVideoSelect = selectedVideo => {
        this.setState({
            selectedVideo
        });
    }

    componentDidMount() {
        this.onSearchSubmit('youtube');
    }
    
    onSearchSubmit = async search => {
        const request = await youtube.get('/search', {
            params: {
                q: search
            }
        })

        const videos = request.data.items;
        const selectedVideo = videos[0];
        this.setState({
            videos,
            selectedVideo
        });
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;