import {GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS} from "../actions/ingredientsData";


const initialState= {
    items: [],
    itemsRequest: false,
    itemsSuccess: false
}

export const ingredientsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                itemsRequest: true
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                items: action.items,
                itemsRequest: false,
                itemsSuccess: true,
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                initialState
            }
        }
        default:{
            return state
        }
    }
};