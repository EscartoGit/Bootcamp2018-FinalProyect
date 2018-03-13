import React, { Component } from 'react';

class Video extends Component {
  render () {
    return (
      <li>
      {this.props.title} - {this.props.year} -	{this.props.description}
      </li>
    );
  }
}

export default Video;
