import {combineReducers} from "redux";
import {ingredientsDataReducer} from "./ingredientsData";
import {orderReducer} from "./orderDetails";
import {currentIngredientReducer} from './currentIngredient'
import {constructorDataReducer} from './constructorData'

export const rootReducer = combineReducers({
    constructor: constructorDataReducer,
    ingredients: ingredientsDataReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer
})