import React, { Component } from 'react';
import './../css/App.css';

class Reproductor extends Component{

      constructor(props){
          super(props);
          this.state = {
              checked : false,
          }
          this.handleCheck = this.handleCheck.bind(this);  
          this.buildURL = this.buildURL.bind(this);
      }

      buildURL(){
          if(this.state.checked){
              return "http://www.youtube.com/embed/" +this.props.select.id+"?rel=0"+"&loop=1&playlist="+this.props.select.id;
          }
          return "http://www.youtube.com/embed/" +this.props.select.id+"?rel=0";
        }

     handleCheck(){
          this.setState({checked: !this.state.checked});
    }



      render(){
          {var urlVideo = this.buildURL()};
          return(
              <div className="reproductor-container">
              <h2>{this.props.select.title}</h2>
                 <div className="video-container">
                    <iframe src={urlVideo} allow="autoplay; encrypted-media"></iframe>
                 </div>
                 <div className="col-xs-12 pdrl0 repeat_chechbox">
                   <div className="switch_box box_1">
                     <input type="checkbox" className="switch_1" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
                   </div>
                   <div>Loop Video</div>
                 </div>
                 <div className="video-info">
                      <p><b>Description:</b><br/> {(this.props.select.description!=='') ? this.props.select.description : 'Description not found'}</p>
                 </div>
              </div>
            );
          }
}

export default Reproductor;
