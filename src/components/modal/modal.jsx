import React, {useEffect, useContext} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import styles from './modal.module.css'

export default function Modal(props) {
    const {closeModal, modalOpened, children} = props;


    useEffect(() => {
        document.addEventListener('keydown', escButtonHandler)

        return () => {
            document.removeEventListener('keydown', escButtonHandler)
        }
    }, [modalOpened])

    function escButtonHandler(event){
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    return (
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary" onClick={closeModal}/>
                </div>
                {children}
            </div>
    )
}

Modal.propTypes = {
    children: PropTypes.element
}