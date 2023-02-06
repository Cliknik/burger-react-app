import {SET_INGREDIENT_MODAL, RESET_INGREDIENT_MODAL} from "../actions/currentIngredient";

const initialState = {
    item: {},
    modalOpened: false
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENT_MODAL:{
            return {
                item: action.item,
                modalOpened: true
            }
        }
        case RESET_INGREDIENT_MODAL:{
            return initialState
        }
        default: {
            return initialState
        }
    }
};