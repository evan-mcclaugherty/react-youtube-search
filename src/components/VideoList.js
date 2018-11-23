import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    render() {
        const { videos, onVideoSelect } = this.props;

        const renderList = videos.map(video => {
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        });
        return (
            <div className='video-list ui relaxed divided list'>
                {renderList}
            </div>
        );
    }
}

export default VideoList;