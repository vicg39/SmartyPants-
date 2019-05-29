import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";
import ResultsPost from "./results-post";


import { connect } from 'react-redux';
import * as actions from "../actions";

class Results extends Component {
    
    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query)
    }

    render() {
        return (
            <div>
                <Logo size={150}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
                <ResultsPost />
            </div>
        )
    }
}

export default connect(null, actions)(Results);