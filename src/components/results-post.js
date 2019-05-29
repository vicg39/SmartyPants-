import React, { Component } from "react";

import { connect } from 'react-redux';
import Post from "./post";



class ResultsPosts extends Component {
    
    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post} />
        })
        return posts;
    }

    render() {
        return (
            <ul className="result-posts">
                <div className="result-posts-wrapper">
                    <ul className="results-posts-posts">
                        {this.renderPosts()}
                    </ul>
                </div>
            </ul>

        )
    }    
}

function mapStateToProps(state) {
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);