import React from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './ingredient.module.css'

function Ingredient(props) {
    return (
        <div className={styles.ingredientContainer}>
            <Counter count={1} extraClass="m-1" size="default" />
            <img src={props.image} alt="Картинка ингридиента"/>
            <p className={ `text text_type_digits-default ${styles.name}`}>{props.price} <CurrencyIcon type={"primary"} /></p>
            <p className={ `text text_type_main-small ${styles.name}`}>{props.name}</p>
        </div>
    )
}

export default Ingredient;