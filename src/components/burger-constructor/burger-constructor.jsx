import React, {useMemo} from "react";

import {useDrop} from "react-dnd";
import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {getOrderNumber} from '../../services/actions/orderDetails'

import {url, getOrder, getConstructorData} from  '../../utils/constants'

import styles from './burger-constructor.module.css'
import {useSelector, useDispatch} from "react-redux";
import {
    ADD_BUN,
    addMainIngredient,
    REMOVE_MAIN_INGREDIENT
} from "../../services/actions/constructorData";
import MainConstructorItem from "../main-constructor-item/main-constructor-item";

function BurgerConstructor() {
    const dispatch = useDispatch();

    const {modalOpened, idRequest} = useSelector(getOrder);
    const {bun, main} = useSelector(getConstructorData);

    function removeIngredient(item){
        dispatch({
            type: REMOVE_MAIN_INGREDIENT,
            item
        })
    }

    const buttonText = idRequest ? 'Отправляем Ваш заказ' : 'Оформить заказ'

    const [{boxShadow}, dropTarget] = useDrop({
        accept: 'ingredient-item',
        drop: (item) => {
            if (item.data.type === 'bun') {
                dispatch({
                    type: ADD_BUN,
                    item
                })
            }
            else {
                dispatch(addMainIngredient(item))
            }
        },
        collect: monitor => ({
                boxShadow: monitor.isOver() ? '0px 0px 5px 6px rgba(34, 60, 80, 0.6) inset' : 'none'
            })
        })

    function collectOrderedId(){
        return [].concat(bun._id,
            main.map((item) => {
                return item._id
            }))
    }

    function getOrderId(){
        dispatch(getOrderNumber(`${url}orders`, collectOrderedId()))
    }



    const orderTotal = useMemo(() => {
        if (!bun && !main) {
            return 0
        } else if (!bun && main) {
            return main.reduce((initValue, item) => {
                return item.price + initValue
            }, 0)
        } else if (!main && bun) {
            return  (bun.price * 2)
        } else {
            return  ((bun.price * 2) + main.reduce((initValue, item) => {
                return item.price + initValue
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
                        key={bun.id}
                    />
                    : null}
                    <ul className={styles.scrollArea}>
                        {main ?
                            main.map((item, index) => {
                                return <MainConstructorItem
                                        handleDelete={removeIngredient}
                                        key={item.id}
                                        index={index}
                                        item={item}
                                />
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
                        key={bun.id}
                    />
                    : null
                    }
                </div>
                <div className={styles.order}>
                    <div className={styles.total}>
                        <p className="text text_type_digits-medium">{orderTotal}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <Button disabled={!(bun && main.length > 0)} htmlType="button" type="primary" size="large" id={'order-button'} onClick={getOrderId}>{buttonText}</Button>
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

export default BurgerConstructor;