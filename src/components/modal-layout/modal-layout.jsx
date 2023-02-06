import React from "react";

import styles from './modal-layout.module.css'

const ModalLayout = ({closeModal}) => {

    return (
        <div className={styles.wrapper} onClick={closeModal}>
        </div>
    );
}

export default ModalLayout;