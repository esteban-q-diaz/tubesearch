import Search from './Search.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import SearchYoutube from '../lib/searchYoutube.js';
import API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],

    };
    this.videoClick = this.videoClick.bind(this);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('javascript');
  }

  getYouTubeVideos(query) {
    var options = {
      key: API_KEY,
      query: query,
    };
    SearchYoutube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0],
      });
    });
  }

  videoClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3" >
            <div><h5><em>Search</em> YouTube Videos</h5></div>
            <Search handleSearch={this.getYouTubeVideos} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Now</em> Playing </h5></div>
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5" >
            <div><h5><em>Next</em> Five </h5></div>
            <VideoList videos={this.state.videos} videoClick={this.videoClick}/>

          </div>
        </div>
      </div>
    );
  }
}
export default App;
