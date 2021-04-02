import { Action } from './../actions/'
import { Todo, ActionTypes } from '../actions'

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload

        case ActionTypes.deleteTodo: 
        default:
            return state
    }
}
