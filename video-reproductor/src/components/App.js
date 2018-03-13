import React, {Component} from 'react';

import './../css/bootstrap.min.css';

import './../css/App.css';

import Reproductor from './Reproductor.js';
import SearchBar from './SearchBar.js'
import VideoList from './VideoList.js'

import YoutubeApi from '../lib/YoutubeApi.js'
import Debounce from '../lib/Debounce.js'

const API_KEY = "AIzaSyAGDLCl4PnihPeLdNzB-GxjpAHpyM2rqGY";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: null
    }

    this.handleSearch = Debounce(this.handleSearch.bind(this), 500);

    this.handleSearch('Globant');

    this.handleVideos = this.handleVideos.bind(this);

  }

  formatJson(json) {
    let auxV = [];
    for (var i = 0; i < json.items.length; i++) {
      let videos = {
        title: json.items[i].snippet.title,
        id: json.items[i].id.videoId,
        thumbnail: json.items[i].snippet.thumbnails.default.url,
        description: json.items[i].snippet.description,
        channelTitle: json.items[i].snippet.channelTitle
      }
      auxV.push(videos);
    }
    return auxV;
  }

  handleSearch(searchTerm) {
    YoutubeApi({key: API_KEY, searchTerm})
    .then((videos) => {
      videos = this.formatJson(videos);
      this.setState({videos})
      this.handleVideos(videos[0])
    })
      .catch(function (reason) {
        console.error(reason);
      });
  }

  handleVideos(selected) {
    if (selected) {
      this.setState({select: selected});
      let i = document.getElementsByClassName("selected");
      if (i[0] !== undefined) {
        i[0].classList.remove("selected");
      }
      document.getElementById(selected.id).classList.add("selected");
    }

  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid pdrl0">
          <SearchBar Search={this.handleSearch}/>
        </div>
        <div className="container">
          <div className="row">
            <div id="pageContainer" className="col-xs-12">
              <div className="col-xs-12 col-md-7">
                {this.state.select && <Reproductor select={this.state.select}/>}
              </div>
              <div className="col-xs-12 col-md-5 videoList">
                {this.state.videos && <VideoList videos={this.state.videos} handleVideos={this.handleVideos}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
