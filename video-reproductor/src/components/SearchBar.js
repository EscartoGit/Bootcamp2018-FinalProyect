import React, {Component} from "react";

import logo from './../logo.png';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.setSearchTerm = this.setSearchTerm.bind(this)

    }
    setSearchTerm(searchTerm) {

        this.setState({searchTerm})

        if (searchTerm != '') {
            this.props.Search(searchTerm)
        }
    }


  render() {
    return (
      <div className="search-bar">
      <div className="topnav col-xs-12">
      <div className="col-xs-0 col-sm-1 col-md-2 pdrl0">
      <img src={logo} className="App-logo " alt="logo"/>
      </div>
      <div className="search-container col-xs-12 col-sm-11 col-md-6">
      <input
      type="text"
      onChange={e => {
        this.setSearchTerm(e.target.value.trim())
      }}
      placeholder="Search.."
      name="search"/>
      </div>
      <div className="col-xs-0 col-md-5"></div>
      </div>
      </div>
    );

  }
}

export default SearchBar;
