import { DeleteTodoAction } from './../actions/todos';
import { Todo, FetchTodosAction, ActionTypes } from '../actions'

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction | DeleteTodoAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload

        default:
            return state
    }
}
