import React, { Component } from "react"

import Logo from "./logo"
import SearchBar from "./searchbar"

class Results extends Component {
    render() {
        return (
            <div>
                <Logo size={150}/>
                <SearchBar />
            </div>
        )
    }
}

export default Results;