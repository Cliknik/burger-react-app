import {getDataFromServer} from "../../utils/work-with-api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getIngredientsData(url){
    return function(dispatch){
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })
        getDataFromServer(url)
            .then(res => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    items: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
                console.log('Произошла ошибка:' + err)
            })
    }

}