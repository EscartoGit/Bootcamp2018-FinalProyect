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
  if (this.props.videos) {
    const aux=this.props.videos;
    console.log(aux);
    return(
            <div>
                {this.renderVideo(aux[0].thumbnail, aux[0].title, aux[0].channelTitle)}
            </div> );
    }
  else { return( <div> loading </div> ); } 
  }
}
export default VideoList;
