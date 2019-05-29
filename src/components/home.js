import React, { Component } from 'react';

import Logo from "./logo"
import SearchBar from "./searchbar"
import RecentPost from "./recent-post"


export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log("handeling submit query", query)
    this.props.history.push("/results")
}
  render() {
    return (
      <div>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPost />
      </div>
    );
  }
}

