import React, { Component } from "react";


class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 230,
            width: this.props.size ? this.props.size : 260
        }
        return (
            <div className="logo-main">
                <img style={size} src="/assets/smartypants.png" />
            </div>
        )
    }
}

export default Logo;
