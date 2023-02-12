import update from "immutability-helper";
import uuid from "react-uuid";

export const ADD_BUN = 'ADD_BUN';
export const ADD_MAIN_INGREDIENT = 'ADD_MAIN_INGREDIENT';
export const REMOVE_MAIN_INGREDIENT = 'REMOVE_MAIN_INGREDIENT';
export const SORT_CONSTRUCTOR_INGREDIENTS = 'SORT_CONSTRUCTOR_INGREDIENTS';

export function sortConstructorIngredients(dragIndex, hoverIndex, store){
    const array = [...store]
    const draggingItem = array[dragIndex]
    const sortedArray = update(array, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, draggingItem],
        ]

    })
    return function(dispatch){
        dispatch({
            type: SORT_CONSTRUCTOR_INGREDIENTS,
            payload: sortedArray
        })
    }
}

export function addMainIngredient(item){
    return function(dispatch){
        dispatch({
            type: ADD_MAIN_INGREDIENT,
            payload: {item: item.data, id: uuid()}
        })
    }
}