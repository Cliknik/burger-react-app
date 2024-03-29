import {
        ADD_MAIN_INGREDIENT,
        ADD_BUN,
        REMOVE_MAIN_INGREDIENT,
        SORT_CONSTRUCTOR_INGREDIENTS
} from '../actions/constructorData'

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
                               main: [...state.main, {...action.payload.item, id: action.payload.id}
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