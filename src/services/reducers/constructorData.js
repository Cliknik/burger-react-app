import {ADD_MAIN_INGREDIENT, ADD_BUN, REMOVE_MAIN_INGREDIENT} from '../actions/constructorData'
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
                               main: [...state.main, {
                                       ingredient: {
                                               id: uuid,
                                               data: action.item.data
                                       }
                               }
                       ]}
               }
               case REMOVE_MAIN_INGREDIENT: {
                       return {
                               ...state,
                               main: state.main.filter(item => item.ingredient.id !== action.target.id)
                       }
               }
               default: {
                       const main = state.main ? state.main : []
                       return {...state, main}
               }
       }
};