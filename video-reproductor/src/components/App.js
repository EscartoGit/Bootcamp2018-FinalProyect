import React, {Component} from 'react';
import './../css/App.css';
import Description from './Descriptor.js';
import Reproductor from './Reproductor.js';
import SearchBar from './SearchBar.js'
import VideoList from './VideoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar  />
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
