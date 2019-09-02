
import React from "react";
import PropTypes from "prop-types";

export default class SuccessFormater extends React.Component {

    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <div className="successModal">
                <div className="successModal__media"><i className="sucessIcon fa fa-check"></i></div>
                <div className="successModal__title">success!!!</div>
                <div className="successModal__text">{this.props.children}</div>
            </div>
        );
    }
}