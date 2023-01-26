import React, {useContext, useEffect, useState, useMemo} from "react";
import PropTypes from "prop-types";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import DataPropTypes from "../../utils/data-prop-types"
import {IngredientsContext} from '../../services/ingredientsContext'

import styles from './burger-constructor.module.css'

function BurgerConstructor(props) {
    const {ingredients} = useContext(IngredientsContext);
    const {getModalType, openModal} = props;

    const [ orderTotal, setOrderTotal ] = useState(0);

    const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients])

    const fillings = useMemo(() => ingredients.filter(item => item.type !== 'bun'), [ingredients])

    function calculateOrderTotal(){
        return  ((buns[0].price * 2) + fillings.reduce((initValue, item) => {
            return item.price + initValue
        }, 0))
    }

    useEffect(() => {
        setOrderTotal(calculateOrderTotal)
    },[ingredients])



    return(
        <section className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {buns ?
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${buns[0].name} (верх)`}
                    price={buns[0].price}
                    thumbnail={buns[0].image}
                    extraClass={styles.bun}
                />
                : null}
                <ul className={styles.scrollArea}>
                    {fillings.map((item, index) => {
                       return (<div className={styles.ingredientContainer}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                                extraClass={styles.ingredientElement}
                                key={item._id + index}
                                id={item._id + index}
                            />
                        </div>)
                    })}
                </ul>
                {buns ?
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${buns[0].name} (низ)`}
                    price={buns[0].price}
                    thumbnail={buns[0].image}
                    extraClass={styles.bun}
                />
                : null
                }
            </div>
            <div className={styles.order}>
                <div className={styles.total}>
                    <p className="text text_type_digits-medium">{orderTotal}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={(evt) => {getModalType(evt); openModal()}} id={'order-button'}>Оформить заказ</Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    items: PropTypes.arrayOf(DataPropTypes).isRequired
}

export default BurgerConstructor;