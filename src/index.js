// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import SearchYoutube from './lib/searchYoutube.js';
import API_KEY from './config/youtube.js';

ReactDOM.render(<App searchYoutube={SearchYoutube} API_KEY={API_KEY}/>, document.getElementById('app'));

