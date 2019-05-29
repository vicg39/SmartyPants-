import React, { Component } from "react"

import { connect } from "react-redux";

import * as actions from "../actions"

class RecentPosts extends Component {
    componentDidMount() {
        this.props.fetchRecentPosts()
    }

    render() {
        return (
            <div className="recent-post">
                <div className="recent-post-wrapper">
                    <div className="recent-post-heading">Recent Post</div>
                    <ul className="recent-post-post">
                        <li>Recent post 1</li>
                        <li>Recent post 2</li>
                        <li>Recent post 3</li>
                    </ul>
                </div>
            </div> 
            
        )
    }
}

export default connect(null, actions)(RecentPosts);