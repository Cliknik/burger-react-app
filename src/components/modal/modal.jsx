import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import styles from './modal.module.css'
import ModalLayout from "../modal-layout/modal-layout";
import {RESET_INGREDIENT_MODAL} from "../../services/actions/currentIngredient";
import {useDispatch} from "react-redux";
import {RESET_ORDER_NUMBER} from "../../services/actions/orderDetails";

const modalRoot = document.getElementById('react-modals');

export default function Modal({children}) {
    const dispatch = useDispatch();

    //Навешиваем при монтировании и снимаем при размонтировании слушателя кнопки Esc
    useEffect(() => {
        document.addEventListener('keydown', escButtonHandler)

        return () => {
            document.removeEventListener('keydown', escButtonHandler)
        }
    }, [children])


    // Закрываем модалку в зависимости от типа ребенка
    function closeModal(){
        switch (children.type.name) {
            case 'OrderDetails': {
                dispatch({
                    type: RESET_ORDER_NUMBER
                })
            }
            case 'IngredientDetails': {
                dispatch({
                    type: RESET_INGREDIENT_MODAL
                })
            }
        }
    }

    function escButtonHandler(event){
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    return ReactDOM.createPortal(
        (<>
            <div className={styles.modal}>
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