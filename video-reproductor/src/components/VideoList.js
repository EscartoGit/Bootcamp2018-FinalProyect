import React, {Component} from 'react';
import Video from './Video';

class VideoList extends Component{
  constructor(props){
    super(props);
  }
  renderVideo(img, title, channel){
    if (this.props.videos) {
      return(
        <div className="col-xs-12 videoListElement">
        <div className="col-xs-5 pd0">
        <img src={img} className="img-thumbnail" alt=""/>
        </div>
        <div className="col-xs-7">
        <div className="col-xs-12">
        <b>{title}</b>
        </div>
        <div className="col-xs-12">
        By {channel} <br/>
        </div>
        </div>
        </div>
      );
    } else {
      return(
        <div> loading </div>
      );

    }

  }
  render(){
    console.log(this.props.videos);
    return(
    <ul>
    {this.props.videos.map(i => {
      debugger

      return (

        <Video
        key={i.id}
        id={i.id}
        title={i.title}
        description={i.description}
        />
      );
    })}

    </ul>
);
  }
}
export default VideoList;
