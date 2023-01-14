import React from "react";
import ReactDOM from "react-dom";
import Modal from "../modal/modal";

import styles from './modal-layout.module.css'


const ModalLayout = ({modalOpened, toggleModalHandler, escButtonHandler}) => {
    const modalRoot = document.getElementById('react-modals');

    return ReactDOM.createPortal(
        modalOpened &&
        <div className={styles.wrapper} onClick={toggleModalHandler}>
            <Modal modalOpened={modalOpened} toggleModalHandler={toggleModalHandler} escButtonHandler={escButtonHandler}/>
        </div>,
        modalRoot
    );
}

export default ModalLayout;