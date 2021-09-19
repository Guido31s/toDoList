import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, changeItem, onRemove}) => {



    return (
        <ul>
            {todos.map((todo) => {
                return(
                    <>
                    <TodoItem key={todo.id} todo={todo} changeItem={changeItem} onRemove={onRemove} />
                    </>
                )})}
        </ul>
    )
}

export default TodoList
