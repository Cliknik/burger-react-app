import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Modal from "../modal/modal";


const ModalLayout = ({modalOpened, toggleModalHandler, escButtonHandler}) => {
    const modalRoot = document.getElementById('react-modals');

    return ReactDOM.createPortal(
        <Modal modalOpened={modalOpened} toggleModalHandler={toggleModalHandler} escButtonHandler={escButtonHandler}/>,
        modalRoot
    );
}

export default ModalLayout;