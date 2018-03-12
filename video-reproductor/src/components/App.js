import React, { Component } from 'react';
import logo from './../logo.svg';
import './../css/App.css';
//import Descriptor from './Descriptor.js';
import Reproductor from './Reproductor.js';
import SearchBar from './SearchBar.js'
//import VideoList from './VideoList.js'

class App extends Component {

  constructor(){
      super();
      this.state={
          title:'Dragon Ball Z - El Regreso del Guerrero Legendario | Pelicula Completa HD - Latino',
          videoId:'iQtDIVRO8Xs',
          description:'La segunda Pelicula de Dragon Ball Z donde regresa el Legendario Super Sayajin de Broly Dragon Ball Z - El Regreso de Broly Dragon Ball Z - El Regreso del Guerrero Legendario El Legendario...',
      }
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Reproductor videoId={this.state.videoId} title={this.state.title} description={this.state.description}/>
      </div>
    );
  }
}

export default App;
