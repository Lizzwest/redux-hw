import {
  ADD_TODO,
  MARK_COMPLETE,
  NEW_TODO,
  REMOVE_TODO,
  SORT_TODOS
} from '../types'

export const AddTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const CreateNewTodo = (formValue) => ({
  type: NEW_TODO,
  payload: formValue
})

export const RemoveTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index
})

export const ToggleTodoCompleted = (index, value) => ({
  type: MARK_COMPLETE,
  payload: {
    index,
    completed: value
  }
})

export const SortTodos = (value) => ({
  type: SORT_TODOS,
  payload: value
})
