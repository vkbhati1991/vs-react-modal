import React from 'react';
import Modal from "./index";


const clickFooter = () => {
    console.log("click footer");
}

function HowToUse() {

    const footerArray = [{
        label: "OK",
        dataId: 1,
        onCustomEvent: clickFooter()
    },
    {
        label: "cancel",
        dataId: 2,
        onCustomEvent: null
    }
    ];
    return (
        <Modal
            element={<div className="button">open modal</div>}
            modalClass="modal"
            modalBodyClass="modal-body"
            elementClass="modalbtn"
            title="Modal"
            header={false}
            footerActions={footerArray}
            maxWidth={500}
            modalType="error"
        >
            Cras mattis consectetur purus sit amet fermentum. Cras
            justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
             leo risus, porta ac consectetur ac, vestibulum at eros.
    </Modal>
    );

}

export default HowToUse;
