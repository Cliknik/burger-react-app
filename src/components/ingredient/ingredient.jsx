import React from "react";
import PropTypes from "prop-types";

import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './ingredient.module.css'

function Ingredient(props) {
    console.log(props.modalOpened)
    return (
        <div className={styles.ingredientContainer} onClick={props.toggleModalHandler}>
            <Counter count={1} extraClass="m-1" size="default" />
            <img src={props.image} alt="Картинка ингридиента"/>
            <p className={ `text text_type_digits-default ${styles.name}`}>{props.price} <CurrencyIcon type={"primary"} /></p>
            <p className={ `text text_type_main-small ${styles.name}`}>{props.name}</p>
        </div>
    )
}

Ingredient.propTypes = PropTypes.objectOf({
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}).isRequired

export default Ingredient;