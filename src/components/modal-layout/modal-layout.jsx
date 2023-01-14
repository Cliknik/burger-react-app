import React from "react";
import ReactDOM from "react-dom";
import Modal from "../modal/modal";

import styles from './modal-layout.module.css'
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";


const ModalLayout = ({modalOpened, toggleModalHandler, escButtonHandler, modalContent, ingredients, ingredientId}) => {

    const modalType = modalContent === 'ingredient' ? <IngredientDetails ingredientId={ingredientId} ingredients={ingredients}/> : <OrderDetails/>

    const modalRoot = document.getElementById('react-modals');

    return ReactDOM.createPortal(
        modalOpened &&
        <div className={styles.wrapper} onClick={toggleModalHandler}>
            <Modal ingredients={ingredients} modalOpened={modalOpened} toggleModalHandler={toggleModalHandler} escButtonHandler={escButtonHandler}>
                {modalType}
            </Modal>
        </div>,
        modalRoot
    );
}

export default ModalLayout;