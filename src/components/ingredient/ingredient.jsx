import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";

import styles from './ingredient.module.css'
import IngredientDetails from "../ingredient-details/ingredient-details";
import {RESET_INGREDIENT_MODAL, SET_INGREDIENT_MODAL, setIngredients} from "../../services/actions/currentIngredient";

function Ingredient(props) {
    const {image, price, id, name, data} = props
    const dispatch = useDispatch();
    const item = useSelector(store => store.currentIngredient.item)

    // const openModal = (data) => {
    //     dispatch(setIngredients(data))
    // }

    function closeModal(){
        dispatch({
            type: RESET_INGREDIENT_MODAL
        })
    }

    return (
        <>
            <div className={styles.ingredientContainer} onClick={() => dispatch(setIngredients(data))} id={id}>
                <Counter count={1} extraClass="m-1" size="default" />
                <img src={image} alt="Картинка ингридиента"/>
                <p className={ `text text_type_digits-default ${styles.name}`}>{price} <CurrencyIcon type={"primary"} /></p>
                <p className={ `text text_type_main-small ${styles.name}`}>{name}</p>
            </div>
            {item &&
            <Modal closeModal={closeModal}>
                <IngredientDetails item={item} />
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