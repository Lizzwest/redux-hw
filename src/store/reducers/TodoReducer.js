import {
  ADD_TODO,
  MARK_COMPLETE,
  NEW_TODO,
  REMOVE_TODO,
  SORT_TODOS
} from '../types'

const initialState = {
  todos: [{ name: 'Make Memes', completed: false }],
  newTodo: ''
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { name: action.payload, completed: false }],
        newTodo: ''
      }
    case NEW_TODO:
      return { ...state, newTodo: action.payload }
    case REMOVE_TODO:
      let updatedList = state.todos.filter(
        (todo, index) => index !== action.payload
      )
      return { ...state, todos: updatedList }
    case MARK_COMPLETE:
      let completed = state.todos.map((todo, index) => {
        if (index === action.payload.index) {
          todo.completed = action.payload.completed
          return todo
        }
        return todo
      })
      return { ...state, todos: completed }
    case SORT_TODOS:
      let sortedTodos = state.todos.sort((a, b) => {
        if (action.payload) {
          return b.completed - a.completed
        }
        return a.completed - b.completed
      })
      return {
        ...state,
        todos: sortedTodos
      }
    default:
      return { ...state }
  }
}

export default TodoReducer
