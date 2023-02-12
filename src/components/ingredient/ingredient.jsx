import React, {useEffect,useMemo} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector,} from "react-redux";
import {useDrag} from "react-dnd";

import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './ingredient.module.css'
import {setIngredients} from "../../services/actions/currentIngredient";


function Ingredient({data}) {
    const constructorStore = useSelector(store => store.constructorData)
    const dispatch = useDispatch();

    const counter = useMemo(() => {
        return data.type !== 'bun'
            ? constructorStore.main.length > 0 && constructorStore.main.reduce((initValue, i) => {
                return i._id === data._id ? initValue + 1 : initValue
        }, 0)
            : constructorStore.bun && constructorStore.bun._id === data._id ? 1 : 0
    }, [constructorStore])

    const [{opacity}, dragItem] = useDrag({
        type: 'ingredient-item',
        item: { data },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })

    return (
        <>
            <div className={styles.ingredientContainer} style={{opacity}} onClick={() => dispatch(setIngredients(data))} id={data._id} ref={dragItem}>
                {counter > 0 &&
                    <Counter count={counter} extraClass="m-1" size="default"/>
                }
                <img src={data.image} alt="Картинка ингридиента"/>
                <p className={ `text text_type_digits-default ${styles.name}`}>{data.price} <CurrencyIcon type={"primary"} /></p>
                <p className={ `text text_type_main-small ${styles.name}`}>{data.name}</p>
            </div>
        </>
    )
}

// Ingredient.propTypes = PropTypes.objectOf({
//     image: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired
// }).isRequired

export default Ingredient;