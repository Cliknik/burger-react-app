import {
        ADD_MAIN_INGREDIENT,
        ADD_BUN,
        REMOVE_MAIN_INGREDIENT,
        SORT_CONSTRUCTOR_INGREDIENTS
} from '../actions/constructorData'
import uuid from "react-uuid";

const initialState = {
        bun: null,
        main: []
}

export const constructorDataReducer = (state = initialState, action) => {
       switch (action.type) {
               case ADD_BUN: {
                       return {
                               ...state,
                               bun: action.item.data,
                       }
               }
               case ADD_MAIN_INGREDIENT: {
                       return {
                               ...state,
                               main: [...state.main, {...action.item.data, id: uuid()}
                       ]}
               }
               case REMOVE_MAIN_INGREDIENT: {
                       return {
                               ...state,
                               main: state.main.filter(item => item.id !== action.item)
                       }
               }
               case SORT_CONSTRUCTOR_INGREDIENTS: {

                       return {
                               ...state,
                               main: action.payload
                       }
               }
               default: {
                       return state
               }
       }
};