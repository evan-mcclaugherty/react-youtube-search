import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    render() {
        const { videos } = this.props;
        const renderList = videos.map(video => {
            return <VideoItem key={video.etag} video={video} />
        });
        return (
            <div className='video-list ui relaxed divided list'>
                {renderList}
            </div>
        );
    }
}

export default VideoList;