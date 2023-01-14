import React, {useState, useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";


import styles from './modal.module.css'
import OrderDetails from "../order-details/order-details";

export default function Modal({modalOpened}) {
    modalOpened = true;

    return (
        modalOpened &&
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary"/>
                </div>
                <OrderDetails/>
            </div>
        </div>
    )
}