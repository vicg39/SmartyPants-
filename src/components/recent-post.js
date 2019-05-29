import React, { Component } from "react"

class RecentPost extends Component {
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

export default RecentPost;