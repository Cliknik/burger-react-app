import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import styles from './modal-layout.module.css'
import Modal from "../modal/modal";

const modalRoot = document.getElementById('react-modals')

const ModalLayout = (props) => {
    const modalLayout = document.getElementById('modal-layout')

    const [state, setState] = useState()

    useEffect(() => {

    })

    function toggleModal(element){
        element.classList.toggle('modal-opened')
    }

    return ReactDOM.createPortal(
        (<div className={styles.layout} onClick={toggleModal(modalLayout)} id="modal-layout">
            <Modal toggleModal={toggleModal}/>
        </div>),
        modalRoot
    );
}

export default ModalLayout;