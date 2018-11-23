import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
    render() {
        const { snippet } = this.props.video;
        return (
            <div className='video-item item'>
                <img className='ui image' src={snippet.thumbnails.medium.url}></img>
                <div className='content'>
                    <div className='header'>{snippet.title}</div>
                    {/* <div className='description'>{snippet.description}</div> */}
                </div>
            </div>
        );
    }
}

export default VideoItem;