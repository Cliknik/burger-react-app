import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Modal from "../modal/modal";


const ModalLayout = ({modalOpened, toggleModalHandler}) => {
    const modalRoot = document.getElementById('react-modals');

    return ReactDOM.createPortal(
        <Modal modalOpened={modalOpened} toggleModalHandler={toggleModalHandler}/>,
        modalRoot
    );
}

export default ModalLayout;