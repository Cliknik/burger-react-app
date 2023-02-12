import {sendOrderDetails} from "../../utils/work-with-api";

export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const RESET_ORDER_NUMBER = 'RESET_ORDER_NUMBER';

export function getOrderNumber(url, details){
    return function(dispatch){
        dispatch({
            type: GET_ORDER_NUMBER_REQUEST
        })
        sendOrderDetails(url, details)
            .then((res) => {
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    payload: res.order.number
                })
            })
                .catch(err => {
                    dispatch({
                        type: GET_ORDER_NUMBER_FAILED
                    })
                    console.log('Произошла ошибка:' + err)
                })
    }
}
