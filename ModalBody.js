import React, { Component } from "react";
import DefaultFormater from "./Formaters/DefaultFormater";
import SuccessFormater from "./Formaters/SuccessFormater";
import WarningFormater from "./Formaters/WarningFormater";
import ConfirmFormater from "./Formaters/ConfirmFormater";
import ErrorFormater from "./Formaters/ErrorFormater";
//import PropTypes from "prop-types";

const MODAL = {
    DEFAULT: "default",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    CONFIRM: "confirm"
}

export default class ModalBody extends Component {

    getModalData = (modalType) => {
        switch (modalType) {
            case MODAL.SUCCESS:
                return <SuccessFormater children={this.props.children} />;

            case MODAL.WARNING:
                return <WarningFormater children={this.props.children} />;

            case MODAL.CONFIRM:
                return <ConfirmFormater children={this.props.children} />;

            case MODAL.ERROR:
                return <ErrorFormater children={this.props.children} />;

            default:
                return <DefaultFormater children={this.props.children} />
        }
    }

    render() {
        return (
            <div className="modal__body">{this.getModalData(this.props.modalType)}</div>
        );
    }
}