
import React from "react";
import PropTypes from "prop-types";

export default class DefaultFormater extends React.Component {

    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <div className="defaultModal">{this.props.children}</div>
        );
    }
}