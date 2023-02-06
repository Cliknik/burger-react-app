import {combineReducers} from "redux";
import {ingredientsDataReducer} from "./ingredientsData";
import {orderReducer} from "./orderDetails";
import {currentIngredientReducer} from './currentIngredient'
import {constructorDataReducer} from './constructorData'

export const rootReducer = combineReducers({
    ingredients: ingredientsDataReducer,
    // constructor: constructorDataReducer,
    // ingredient: currentIngredientReducer,
    // order: orderReducer
})