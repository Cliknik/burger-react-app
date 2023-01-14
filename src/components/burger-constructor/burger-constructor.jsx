import React from "react";
import PropTypes from "prop-types";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import DataPropTypes from "../../utils/data-prop-types"

import styles from './burger-constructor.module.css'

function BurgerConstructor(props) {
    const {getModalType, openModal} = props;
    return(
        <section className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                    extraClass={styles.bun}
                />
                <div className={styles.scrollArea}>
                    <div className={styles.ingredientContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                            extraClass={styles.ingredientElement}
                        />
                    </div>
                    <div className={styles.ingredientContainer}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                            extraClass={styles.ingredientElement}
                        />
                    </div>
                </div>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                    extraClass={styles.bun}
                />
            </div>
            <div className={styles.order}>
                <div className={styles.total}>
                    <p className="text text_type_digits-medium">555</p>
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