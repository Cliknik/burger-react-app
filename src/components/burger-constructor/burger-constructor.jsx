import React, {useContext, useEffect, useState, useMemo} from "react";
import PropTypes from "prop-types";
import {useDrop} from "react-dnd";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {getOrderNumber} from '../../services/actions/orderDetails'

import DataPropTypes from "../../utils/data-prop-types"

import {sendOrderDetails} from "../../utils/work-with-api";
import {url} from  '../../utils/constants'

import styles from './burger-constructor.module.css'
import {useSelector, useDispatch} from "react-redux";
import {ADD_BUN, ADD_MAIN_INGREDIENT, REMOVE_MAIN_INGREDIENT} from "../../services/actions/constructorData";


function BurgerConstructor() {
    const modalOpened = useSelector(store => store.order.modalOpened);
    const bun = useSelector(store => store.constructor.bun);
    const main = useSelector(store => store.constructor.main);

    const dispatch = useDispatch();

    function removeIngredient(e){
        dispatch({
            type: REMOVE_MAIN_INGREDIENT,
            e
        })
    }

    const [{boxShadow}, dropTarget] = useDrop({
        accept: 'ingredient-item',
        drop: (item) => {
            item.data.type === 'bun'
                ? dispatch({
                type: ADD_BUN,
                item
                })
                : dispatch({
                type: ADD_MAIN_INGREDIENT,
                item
                })
            },
        collect: monitor => ({
                boxShadow: monitor.isOver() ? '0px 0px 5px 6px rgba(34, 60, 80, 0.6) inset' : 'none'
            })
        })

    function collectOrderedId(){
        return [].concat(bun.map((item) => {
            return item._id
        }),
            main.map((item) => {
                return item.ingredient.data._id
            }))
    }

    function getOrderId(){
        dispatch(getOrderNumber(`${url}order`, collectOrderedId()))
    }



    const orderTotal = useMemo(() => {
        if (!bun && !main) {
            return 0
        } else if (!bun && main) {
            return main.reduce((initValue, item) => {
                return item.ingredient.data.price + initValue
            }, 0)
        } else if (!main && bun) {
            return  (bun.price * 2)
        } else {
            return  ((bun.price * 2) + main.reduce((initValue, item) => {
                return item.ingredient.data.price + initValue
            }, 0))
        }
    },[bun, main])

    return(
        <>
            <section className={styles.container} style={{boxShadow}} ref={dropTarget}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    {bun ?
                        <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass={styles.bun}
                        key={bun._id + 'top'}
                    />
                    : null}
                    <ul className={styles.scrollArea}>
                        {main ?
                            main.map((item) => {
                                return (<div className={styles.ingredientContainer}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.ingredient.data.name}
                                        price={item.ingredient.data.price}
                                        thumbnail={item.ingredient.data.image}
                                        extraClass={styles.ingredientElement}
                                        key={item.ingredient.id}
                                        id={item.ingredient.id}
                                    />
                                </div>)
                        })
                        : null}
                    </ul>
                    {bun ?
                        <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                        extraClass={styles.bun}
                        key={bun._id + 'bottom'}
                    />
                    : null
                    }
                </div>
                <div className={styles.order}>
                    <div className={styles.total}>
                        <p className="text text_type_digits-medium">{orderTotal}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <Button htmlType="button" type="primary" size="large" id={'order-button'} onClick={getOrderId}>Оформить заказ</Button>
                </div>
            </section>
            {modalOpened &&
                <Modal>
                    <OrderDetails />
                </Modal>
            }
        </>
    )
}

// BurgerConstructor.propTypes = {
//     items: PropTypes.arrayOf(DataPropTypes).isRequired
// }

export default BurgerConstructor;