import React, {Component} from 'react';

class Video extends Component {
  render() {
    return (
      <div className="col-xs-12 videoListElement pdrl0" id={this.props.id} onClick= {() => this.props.handleVideos(this.props)}>
        <div className="col-xs-5 ">
          <img src={this.props.thumbnail} className="img-thumbnail" alt=""/>
        </div>
        <div className="col-xs-7 pdrl0">
          <div className="col-xs-12 pdrl0">
            <b>{this.props.title}</b>
          </div>
          <div className="col-xs-12 pdrl0">
            By {this.props.channelTitle}
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
