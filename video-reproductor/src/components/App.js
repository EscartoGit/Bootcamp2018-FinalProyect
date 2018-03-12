import React, {Component} from 'react';
import './../css/App.css';
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
  }

  handleSearch(searchTerm){
    YoutubeApi({key: API_KEY, searchTerm})
      .then((videos) => {
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
      {console.log(this.state)}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Classes Added</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
