import React, {Component} from 'react';
import Video from './Video';

class VideoList extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render(){
    console.log(this.props.videos);
    debugger
    if(this.props.videos){
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
    }else{
      <div>faltan</div>
    }

  }
}
export default VideoList;
