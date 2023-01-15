import React, {useMemo} from "react";
import ReactDOM from "react-dom";
import Modal from "../modal/modal";
import DataPropTypes from "../../utils/data-prop-types";

import styles from './modal-layout.module.css'
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";


const ModalLayout = ({modalOpened, openModal, closeModal, modalContent, ingredients, ingredientId, getModalType, getClickedIngredientId}) => {

    const actualIngredient = useMemo(() => ingredients.filter(item => item._id === ingredientId), [ingredientId]);

    let modalType;

    switch(modalContent) {
        case 'ingredient':
            modalType = <IngredientDetails actualIngredient={actualIngredient}/>
            break;
        case 'order':
            modalType = <OrderDetails/>
            break
        default :
            console.log('Что-то не так с передачей типа модального окна ')
    }

    const modalRoot = document.getElementById('react-modals');


    return ReactDOM.createPortal(
        modalOpened &&
        <div className={styles.wrapper} onClick={closeModal}>
                <Modal getClickedIngredientId={getClickedIngredientId} getModalType={getModalType}
                    modalOpened={modalOpened} openModal={openModal} closeModal={closeModal}>
                {modalType}
            </Modal>
        </div>,
        modalRoot
    );
}

ModalLayout.propTypes = {
    ingredients: PropTypes.arrayOf(DataPropTypes).isRequired,
}

export default ModalLayout;