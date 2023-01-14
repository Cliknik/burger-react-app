import React, {useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './modal.module.css'

export default function Modal({closeModal, modalOpened, escButtonHandler, children}) {

    useEffect(() => {
        document.addEventListener('keydown', escButtonHandler)

        return () => {
            document.removeEventListener('keydown', escButtonHandler)
        }
    }, [modalOpened])

    return (
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary" onClick={closeModal}/>
                </div>
                {children}
            </div>
    )
}