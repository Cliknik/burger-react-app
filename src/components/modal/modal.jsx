import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import styles from './modal.module.css'
import ModalLayout from "../modal-layout/modal-layout";
import {RESET_INGREDIENT_MODAL} from "../../services/actions/currentIngredient";
import {useDispatch} from "react-redux";

const modalRoot = document.getElementById('react-modals');

export default function Modal(props) {
    const {children} = props;
    const dispatch = useDispatch();


    useEffect(() => {
        document.addEventListener('keydown', escButtonHandler)

        return () => {
            document.removeEventListener('keydown', escButtonHandler)
        }
    }, [])

    function closeModal(){
        dispatch({
            type: RESET_INGREDIENT_MODAL
        })
    }

    function escButtonHandler(event){
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    return ReactDOM.createPortal(
        (<>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary" onClick={closeModal}/>
                </div>
                {children}
            </div>
            <ModalLayout closeModal={closeModal}/>
        </>),
        modalRoot
    )
}

Modal.propTypes = {
    children: PropTypes.element
}