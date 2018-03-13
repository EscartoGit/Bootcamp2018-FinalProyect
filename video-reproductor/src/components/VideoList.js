import React, {Component} from 'react';
import Video from './Video';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.videos) {
      return (
        <div>
          {this.props.videos.map(i => {
              return (
                <Video
                  key={i.id}
                  thumbnail={i.thumbnail}
                  title={i.title}
                  description={i.description}
                  channelTitle={i.channelTitle}
                  id={i.id}
                  handleVideos={this.props.handleVideos.bind(this)}/>
              );
            })}

        </div>
      );
    } else { 
      <div> Error carga de lista </div>    
    }

  }
}
export default VideoList;