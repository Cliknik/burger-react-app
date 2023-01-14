import React, {useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";


import styles from './modal.module.css'
import OrderDetails from "../order-details/order-details";

export default function Modal({modalOpened, toggleModalHandler, escButtonHandler}) {

    useEffect(() => {
        document.addEventListener('keydown', escButtonHandler)

        return () => {
            document.removeEventListener('keydown', escButtonHandler)
        }
    }, [modalOpened])

    return (
        modalOpened &&
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary" onClick={toggleModalHandler}/>
                </div>
                <OrderDetails/>
            </div>
        </div>
    )
}