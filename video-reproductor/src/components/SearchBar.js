import React, {Component} from "react";
import './../css/SearchBar.css';

import logo from './../logo.png';





class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.setSearchTerm = this.setSearchTerm.bind(this)

    }
    setSearchTerm(searchTerm) {
    
        this.setState({ searchTerm })
    
        if (searchTerm != '') {
          this.props.Search(searchTerm)
        }
      }

    render() {
        return (
            <div className="search-bar">
                <div className="topnav">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="search-container">
                        <form>
                            <input
                                type="text"
                                onChange={e => {
                                this.setSearchTerm(e.target.value.trim())
                            }}
                                placeholder="Search.."
                                name="search"/>
                        </form>
                    </div>
                </div>
            </div>
        );

    }
}

export default SearchBar;