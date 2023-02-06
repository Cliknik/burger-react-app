import React from "react";

import styles from './modal-layout.module.css'

const ModalLayout = ({closeModal, children}) => {

    return (
        <div className={styles.wrapper} onClick={closeModal}>
            {children}
        </div>
    );
}

export default ModalLayout;