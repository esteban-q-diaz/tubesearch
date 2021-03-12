import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video) => (
      <VideoListEntry
        video={video}
        key={video.id.videoId}
        videoClick={props.videoClick}
      />
    )
    )}
  </div>
);

export default VideoList;
