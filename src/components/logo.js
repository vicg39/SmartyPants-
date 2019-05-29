import React, { Component } from "react";

import { Link } from "react-router-dom"


class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 230,
            width: this.props.size ? this.props.size : 260
        }
        return (
            <div className="logo-main">
                <Link to="/">
                    <img style={size} src="/assets/smartypants.png" />
                </Link>

            </div>
        )
    }
}

export default Logo;
