import React, {useState} from "react";

import Styles from './burger-ingredients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";
import Ingredient from "../ingredient/ingredient";

function BurgerIngredients() {
        const [current, setCurrent] = React.useState('one');

        const buns = data.filter(item => item.type === "bun");
        const sauces = data.filter(item => item.type === "sauce");
        const fillings = data.filter(item => item.type === "main");

        return (
            <section className={Styles.section}>
                <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
                <nav style={{ display: 'flex'}} className="mb-10">
                    <Tab value="one" active={current === 'one'} onClick={setCurrent} href="#buns" data-attribute-anchor="buns">
                        Булки
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent} href="#sauces" data-attribute-anchor="sauces">
                        Соусы
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent} href="#main" data-attribute-anchor="main">
                        Начинки
                    </Tab>
                </nav>
                <div className={Styles.scrollSection}>
                    <h2 className="" id="buns">Булки</h2>
                    <div className={Styles.ingredientsContainer}>
                        {buns.map(item => <Ingredient image={item.image} price={item.price} name={item.name} />)}
                    </div>
                    <h2 id="sauces">Соусы</h2>
                    <div className={Styles.ingredientsContainer}>
                        {sauces.map(item => <Ingredient image={item.image} price={item.price} name={item.name} />)}
                    </div>
                    <h2 id="main">Начинки</h2>
                    <div className={Styles.ingredientsContainer}>
                        {fillings.map(item => <Ingredient image={item.image} price={item.price} name={item.name} />)}
                    </div>
                </div>
            </section>
        )
}

export default BurgerIngredients;