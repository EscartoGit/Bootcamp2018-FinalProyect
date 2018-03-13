import React, { Component } from 'react';
import './../css/App.css';

class Reproductor extends Component{

      constructor(props){
          super(props);
          this.buildURL = this.buildURL.bind(this);
      }

      buildURL(){
          var url = "http://www.youtube.com/embed/" +this.props.select.id+"?rel=0";
          return url;
        }

      render(){
          {var urlVideo = this.buildURL()};
          return(
              <div className="reproductor-container">
                 <div className="video-container">
                    <iframe src={urlVideo} allow="autoplay; encrypted-media"></iframe>
                 </div>
                 <div className="video-info">
                      <h4>{this.props.select.title}</h4>
                      <p><b>Description:</b><br/> {this.props.select.description}</p>
                 </div>
              </div>
            );
          }
}

export default Reproductor;
