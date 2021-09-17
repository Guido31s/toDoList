import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, changeItem}) => {

    return (
        <ul>
            {todos.map((todo) => {
                return(
                    <TodoItem key={todo.id} todo={todo} changeItem={changeItem} />
                )})}
        </ul>
    )
}

export default TodoList
