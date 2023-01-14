import React from "react";
import ReactDOM from "react-dom";
import Modal from "../modal/modal";

import styles from './modal-layout.module.css'
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";


const ModalLayout = ({modalOpened, openModal, closeModal, escButtonHandler, modalContent, ingredients, ingredientId, getModalType, getClickedIngredientId, getClickedElementId}) => {

    const modalType = modalContent === 'ingredient' ? <IngredientDetails ingredientId={ingredientId} ingredients={ingredients}/> : <OrderDetails/>

    const modalRoot = document.getElementById('react-modals');

    return ReactDOM.createPortal(
        modalOpened &&
        <div className={styles.wrapper} onClick={closeModal}>
            <Modal getClickedIngredientId={getClickedIngredientId} getModalType={getModalType} ingredients={ingredients} modalOpened={modalOpened} openModal={openModal} closeModal={closeModal} escButtonHandler={escButtonHandler}>
                {modalType}
            </Modal>
        </div>,
        modalRoot
    );
}

export default ModalLayout;