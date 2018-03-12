import React, { Component } from 'react';
import './../css/App.css';

class Reproductor extends Component{

      constructor(props){
          super(props);
          this.state={
              title:this.props.title,
              videoId:this.props.videoId,
              description:this.props.description,
          }
          this.buildURL = this.buildURL.bind(this);
      }

      buildURL(){
        var url = "https:" + "/" + "/www.youtube.com/embed/" + this.props.videoId;
        console.log("url : " + url);
        return url;
      }

      render(){
          {var urlVideo = this.buildURL()};
          return(
              <div className="reproductor-container">
                 <div className="video-container">
                      <iframe src={urlVideo} allow="autoplay; encrypted-media" allowfullscreen></iframe>
                 </div>
                 <div className="video-info">
                      <h4>{this.state.title}</h4>
                      <p><h5>Description:</h5> {this.state.description}</p>
                 </div>
              </div>
            );
          }
}

export default Reproductor;
