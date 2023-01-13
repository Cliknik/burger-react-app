import React, {useState, useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './modal.module.css'

export default function Modal({modalOpened}) {
    modalOpened = true;

    return (
        modalOpened &&
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <CloseIcon type="primary" styles={{}}/>
            </div>
        </div>
    )
}