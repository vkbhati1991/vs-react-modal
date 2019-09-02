import React, { Component, Fragment as Wrapper } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";

//Modal Components



class ModalContainer extends Component {
    constructor(props) {
        super(props);
        this.elem = document.createElement("div");
    }

    static propTypes = {
        modalClass: PropTypes.string,
        children: PropTypes.any
    }

    componentDidMount() {
        document.body.appendChild(this.elem);
    }

    componentWillUnmount() {
        document.body.removeChild(this.elem);
    }

    getHeader = () => {

        const headerProps = {
            title: this.props.title,
            closeModal: this.props.closeModal
        }

        return this.props.header ? <ModalHeader {...headerProps} /> : null;
    }

    getBody = () => {

        const bodyProps = {
            children: this.props.children,
            modalType: this.props.modalType
        }

        return <ModalBody {...bodyProps} />;
    }

    getFooter = () => {
        const footerProps = {
            footerActions: this.props.footerActions,
            closeModal: this.props.closeModal

        }
        return this.props.footer ? <ModalFooter {...footerProps} /> : null;
    }


    renderModal = () => {
        const { modalClass, overlay, maxWidth } = this.props;

        return (
            <Wrapper>
                {overlay && <div className="modal-overlay"></div>}
                <div className="modalWrapper">
                    <div className="modalContainer">
                        <div className={modalClass} style={{ maxWidth: maxWidth }}>
                            {this.getHeader()}
                            {this.getBody()}
                            {this.getFooter()}
                        </div>
                    </div>
                </div>

            </Wrapper>
        )
    }

    render() {
        return ReactDOM.createPortal(this.renderModal(), this.elem);
    }
}

export default ModalContainer;


