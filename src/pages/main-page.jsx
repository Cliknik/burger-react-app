import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

import {url} from "../utils/constants";
import {getIngredientsData} from "../services/actions/ingredientsData";

export function MainPage() {
    const dispatch = useDispatch();

    const itemsSuccess = useSelector(state => state.ingredients);

    useEffect(() => {
        dispatch(getIngredientsData(`${url}ingredients`))
    }, [dispatch])

    return (
        <DndProvider backend={HTML5Backend} >
            {
                itemsSuccess &&
                <BurgerIngredients/>
            }
            <BurgerConstructor />
        </DndProvider>
    )
}
