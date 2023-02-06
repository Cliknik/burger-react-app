import React, {useContext, useEffect, useState, useMemo} from "react";
import PropTypes from "prop-types";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import DataPropTypes from "../../utils/data-prop-types"

import {sendOrderDetails} from "../../utils/work-with-api";
import {url} from  '../../utils/constants'

import styles from './burger-constructor.module.css'
import {useSelector, useDispatch} from "react-redux";
import {REMOVE_MAIN_INGREDIENT} from "../../services/actions/constructorData";


function BurgerConstructor(props) {
    const {getModalType, openModal, setOrderNumber} = props;

    const dispatch = useDispatch();

    function removeIngredient(e){
        dispatch({
            type: REMOVE_MAIN_INGREDIENT,
            main: e.target.id
        })
    }

    const {bun, main} = useSelector(store => store.constructor)

    function collectOrderedId(){
        return [].concat(bun.map((item) => {
            return item._id
        }),
            main.map((item) => {
                return item._id
            }))
    }

    function getOrderNumber(){
        sendOrderDetails(`${url}orders`, collectOrderedId())
            .then((res) => {
                setOrderNumber(res.order.number)
            })
            .catch(err => console.log(`Ошибка отправки запроса ${err}`))
    }

    const orderTotal = useMemo(() => {
        return  ((bun[0].price * 2) + main.reduce((initValue, item) => {
            return item.price + initValue
        }, 0))
    },[bun, main])

    return(
        <section className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {bun ?
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun[0].name} (верх)`}
                    price={bun[0].price}
                    thumbnail={bun[0].image}
                    extraClass={styles.bun}
                    key={bun[0]._id + 'top'}
                />
                : null}
                <ul className={styles.scrollArea}>
                    {main.map((item, index) => {
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
                {bun ?
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun[0].name} (низ)`}
                    price={bun[0].price}
                    thumbnail={bun[0].image}
                    extraClass={styles.bun}
                    key={bun[0]._id + 'bottom'}
                />
                : null
                }
            </div>
            <div className={styles.order}>
                <div className={styles.total}>
                    <p className="text text_type_digits-medium">{orderTotal}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={(evt) => {getOrderNumber(); getModalType(evt); openModal()}} id={'order-button'}>Оформить заказ</Button>
            </div>
        </section>
    )
}

// BurgerConstructor.propTypes = {
//     items: PropTypes.arrayOf(DataPropTypes).isRequired
// }

export default BurgerConstructor;