import React, {Component} from "react";
import './../css/App.css';
import YoutubeApi from './YoutubeApi.js'
//import logo from './../logo.png';

const API_KEY = "AIzaSyAGDLCl4PnihPeLdNzB-GxjpAHpyM2rqGY";

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
            };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
        };
};

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: props.searchTerm
        };

    }


    setSearchTerm = debounce(searchTerm => {
        this.setState({searchTerm})
        YoutubeApi({key: API_KEY, searchTerm})
            .then((videos) => {
                this.setState({videos})
            })
            .catch(function (reason) {
                console.error(reason);
            });

    }, 1000)

    render() {
        return (
            <div className="search-bar">
                <div className="topnav">
                    <div className="search-container">
                        <form>
                            <input
                                type="text"
                                onChange={e => {
                                this.setSearchTerm(e.target.value)
                            }}
                                placeholder="Search.."
                                name="search"/>
                        </form>
                    </div>
                    <p>{this.state.searchTerm}</p>
                </div>
            </div>
        );

    }
}

export default SearchBar;
