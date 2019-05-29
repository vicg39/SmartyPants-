import React, { Component } from "react";

import { connect } from 'react-redux';



class ResultsPosts extends Component {
    render() {
        return (
            <ul className="result-posts">
                <div className="result-posts-wrapper">
                    <ul className="results-posts-posts">
                        result go here
                    </ul>
                </div>
            </ul>

        )
    }    
}

function mapStateToProps(state) {
    return {state}
}

export default connect(mapStateToProps)(ResultsPosts);