import {GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_FAILED, GET_ORDER_NUMBER_SUCCESS, RESET_ORDER_NUMBER} from "../actions/orderDetails";

const initialState = {
    idRequest: false,
    idSuccess: false,
    orderID: 0,
    modalOpened: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                idRequest: true
            }
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            console.log(action.payload)
            return {
                idRequest: false,
                idSuccess: true,
                orderID: action.payload,
                modalOpened: true,
            }
        }
        case GET_ORDER_NUMBER_FAILED: {
            return {
                ...state,
                idRequest: false
            }
        }
        case RESET_ORDER_NUMBER: {
            return {
                initialState
            }
        }
        default: return state
    }
};