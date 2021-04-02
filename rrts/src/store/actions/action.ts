import axios from 'axios'
import {Dispatch} from 'redux'


const URL = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = () => {

    return async (dispatch: Dispatch) => {
        const response = await axios.get(URL);

        dispatch({
            type: 'FETCH_TODOS',
            payload: response.data
        })
    }
}