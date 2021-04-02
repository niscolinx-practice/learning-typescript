import { ActionTypes } from './types';
import axios from 'axios'
import {Dispatch} from 'redux'

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

interface FetchTodosAction {
    type: ActionTypes.fetchTodos
    payload: Todo[]
}

const URL = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = () => {

    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(URL);

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}