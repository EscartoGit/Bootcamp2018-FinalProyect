import React, { Component } from 'react';

class Video extends Component {
  render () {
    return (
      <div className="col-xs-12 videoListElement" onClick = {() => this.props.handleVideos(this.props)}>
        <div className="col-xs-5 pd0">
          <img src={this.props.thumbnail} className="img-thumbnail" alt=""/>
          </div>
        <div className="col-xs-7">
          <div className="col-xs-12">
            <b>{this.props.title}</b>
          </div>
          <div className="col-xs-12">
            By {this.props.channelTitle} <br/>
          </div>
        </div>
      </div>

    );
  }
}

export default Video;
