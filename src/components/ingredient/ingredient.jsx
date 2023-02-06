import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";

import styles from './ingredient.module.css'
import IngredientDetails from "../ingredient-details/ingredient-details";
import {RESET_INGREDIENT_MODAL, SET_INGREDIENT_MODAL} from "../../services/actions/currentIngredient";

function Ingredient(props) {
    const {image, price, id, name, data } = props
    const dispatch = useDispatch();

    const {modalOpened} = useSelector(store => store.ingredient)

    const openModal = (data) => {
        dispatch({
            type: SET_INGREDIENT_MODAL,
            item: data
        })
    }

    function closeModal(){
        dispatch({
            type: RESET_INGREDIENT_MODAL
        })
    }

    console.log(modalOpened)

    return (
        <>
            <div className={styles.ingredientContainer} onClick={() => openModal(data)} id={id}>
                <Counter count={1} extraClass="m-1" size="default" />
                <img src={image} alt="Картинка ингридиента"/>
                <p className={ `text text_type_digits-default ${styles.name}`}>{price} <CurrencyIcon type={"primary"} /></p>
                <p className={ `text text_type_main-small ${styles.name}`}>{name}</p>
            </div>
            {modalOpened &&
            <Modal closeModal={closeModal}>
                <IngredientDetails />
            </Modal>}
        </>
    )
}

// Ingredient.propTypes = PropTypes.objectOf({
//     image: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired
// }).isRequired

export default Ingredient;