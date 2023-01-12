import React from "react";

import styles from './modal.module.css'

export default function Modal(props){
    return (
        <div className={styles.content}>
            {props.children}
        </div>
    )
}