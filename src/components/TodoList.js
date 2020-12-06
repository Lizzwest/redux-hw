import React from 'react'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import {
  AddTodo,
  RemoveTodo,
  CreateNewTodo,
  ToggleTodoCompleted,
  SortTodos
} from '../store/actions/TodoActions'

const TodoList = (props) => {
  console.log(props)

  const handleChange = (event) => {
    props.createTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addTodo(props.todoState.newTodo)
  }

  const remove = (index) => {
    props.removeTodo(index)
  }
  const toggleCompleted = (todo, index) => {
    return props.markComplete(index, !todo.completed)
  }
  const handleSort = (event) => {
    let value = event.target.value
    return value === 'true' ? props.sortTodos(true) : props.sortTodos(false)
  }

  return (
    <div>
      <TodoForm
        newTodo={props.todoState.newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSort={handleSort}
      />
      {props.todoState.todos.map((todo, index) => (
        <li key={index}>
          {todo.name} <button onClick={() => remove(index)}>Remove</button>
          <button
            onClick={() => toggleCompleted(todo, index)}
            style={{ background: todo.completed ? 'green' : 'yellow' }}
          >
            {todo.completed ? 'Mark Incompleted' : 'Mark Complete'}
          </button>
        </li>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todoState: state.todoState
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
    removeTodo: (index) => dispatch(RemoveTodo(index)),
    createTodo: (formValue) => dispatch(CreateNewTodo(formValue)),
    markComplete: (index, value) => dispatch(ToggleTodoCompleted(index, value)),
    sortTodos: (value) => dispatch(SortTodos(value))
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TodoList)
