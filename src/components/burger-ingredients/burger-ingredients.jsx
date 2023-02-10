import React, {useState, useMemo, useRef} from "react";
import PropTypes from "prop-types";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import DataPropTypes from "../../utils/data-prop-types"

import Styles from './burger-ingredients.module.css';

import {bunType, sauceType, mainType} from "../../utils/constants";

import Ingredient from "../ingredient/ingredient";
import {useSelector} from "react-redux";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = () => {
    const items = useSelector(store => store.ingredients.items)
    const modalOpened = useSelector(store => store.currentIngredient.modalOpened)
    const [current, setCurrent] = useState('one');
    const [sectionScroll, setSectionScroll] = useState(0);

    const bunSectionRef = useRef(null);
    const saucesSectionRef = useRef(null);
    const mainSectionRef = useRef(null);
    const sectionRef = useRef(null);

    const buns = useMemo(() => items.filter(item => item['type'] === bunType),[items]);
    const sauces = useMemo(() => items.filter(item => item['type'] === sauceType),[items]);
    const fillings = useMemo(() => items.filter(item => item['type'] === mainType),[items]);

    React.useEffect(() => {
        const section = sectionRef.current;

        section.addEventListener('scroll', handleScroll);
        return () => section.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        setSectionScroll(sectionRef.current.scrollTop)
    }

    function setViewOnTab(target){
        target.current.scrollIntoView({behavior: "smooth"})
    }

    function activateTab(){
        if (sectionScroll >= 0 && sectionScroll <= 331 ) {
            setCurrent('one');
            return
        }
        else if (sectionScroll >= 332 && sectionScroll <= 867) {
            setCurrent('two');
            return
        }
        else {
            setCurrent('three')
        }
    }

    return (
        <>
        <section className={Styles.section}>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <nav style={{ display: 'flex'}} className="mb-10">
                <Tab value="one" active={current === 'one'} onClick={() => {
                    setCurrent('one');
                    setViewOnTab(bunSectionRef)
                }}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={() => {
                    setCurrent('two');
                    setViewOnTab(saucesSectionRef)
                }}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={() => {
                    setCurrent('three');
                    setViewOnTab(mainSectionRef)
                }}>
                    Начинки
                </Tab>
            </nav>
            <div className={Styles.scrollSection} ref={sectionRef} onScroll={activateTab}>
                <h2 className="" id="buns" ref={bunSectionRef}>Булки</h2>
                <div className={Styles.ingredientsContainer}>
                    {buns.map(item => <Ingredient data={item} key={item._id}/>)}
                </div>
                <h2 id="sauces" ref={saucesSectionRef}>Соусы</h2>
                <div className={Styles.ingredientsContainer}>
                    {sauces.map(item => <Ingredient data={item} key={item._id}/>)}
                </div>
                <h2 id="main" ref={mainSectionRef}>Начинки</h2>
                <div className={Styles.ingredientsContainer}>
                    {fillings.map(item => <Ingredient data={item} key={item._id}/>)}
                </div>
            </div>
        </section>
            {modalOpened &&
                <Modal>
                    <IngredientDetails />
                </Modal>}
    </>
    )
}

export default BurgerIngredients;