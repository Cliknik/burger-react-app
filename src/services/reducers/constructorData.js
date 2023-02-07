import {ADD_MAIN_INGREDIENT, ADD_BUN, REMOVE_MAIN_INGREDIENT,REMOVE_BUN} from '../actions/constructorData'

const initialState = {
        bun: [],
        main: [{
                ingredient: {},
                id: ''
        }]
}

export const constructorDataReducer = (state = initialState, action) => {
       switch (action.type) {
               case ADD_BUN: {
                       return {
                               ...state,
                               bun: action.item
                       }
               }
               case ADD_MAIN_INGREDIENT: {
                       return {
                               ...state,
                               main: [...state.main, {
                                       ingredient: action.item,
                                       id: /тут будет айди кастомный/
                               }]
                       }
               }
               case REMOVE_MAIN_INGREDIENT: {
                       return {
                               ...state,
                               main: state.main.filter(ingredient => ingredient.id !== action.item.id)
                       }
               }
               case REMOVE_BUN: {
                       return {
                               ...state,
                               bun: initialState.bun
                       }
               }
               default: {
                       return state
               }
       }
};