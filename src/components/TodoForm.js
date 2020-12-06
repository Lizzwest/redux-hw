import React from 'react'

const TodoForm = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="newTodo"
          value={props.newTodo}
          onChange={props.handleChange}
        />
        <button type="submit" onClick={props.handleSubmit}>
          Add Todo
        </button>
      </form>
      <select onChange={props.handleSort}>
        <option value={true}>Completed</option>
        <option value={false}>Incomplete</option>
      </select>
    </div>
  )
}

export default TodoForm
