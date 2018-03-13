import React, {Component} from 'react';
import './../css/App.css';
import './../css/bootstrap.min.css';

import Description from './Descriptor.js';
import Reproductor from './Reproductor.js';
import SearchBar from './SearchBar.js'
import VideoList from './VideoList.js'

import YoutubeApi from './YoutubeApi.js'
import Debounce from './Debounce.js'

const API_KEY = "AIzaSyAGDLCl4PnihPeLdNzB-GxjpAHpyM2rqGY";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { videos: null }

    this.handleSearch = Debounce(this.handleSearch.bind(this), 1000)

    this.handleSearch('Globant');
  }

  formatJson(json){
    let auxV=[];
    for (var i = 0; i < json.items.length; i++) {
      let videos={
        title:json.items[i].snippet.title,
        thumbnail:json.items[i].snippet.thumbnails.default.url,
        description:json.items[i].snippet.description,
        channelTitle:json.items[i].snippet.channelTitle,
      }
      auxV.push(videos);
    }
    return auxV;
  }

  handleSearch(searchTerm){
    YoutubeApi({key: API_KEY, searchTerm})
      .then((videos) => {
          videos=this.formatJson(videos);
          this.setState({videos})
      })
      .catch(function (reason) {
          console.error(reason);
      });
  }

  render() {
      return (
        <div className="App">
        <SearchBar Search={this.handleSearch} />

          <div className="col-xs-12">
            <div className="col-xs-9"></div>
            <div className="col-xs-3">

                <VideoList videos={this.state.videos}/>

            </div>
          </div>
        </div>
      );


  }
}

export default App;
