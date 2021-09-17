import React from 'react'

const TodoItem = ({ todo, changeItem }) => {
    const {id, task, completed} = todo

    const changeItemClick = () => {
        changeItem(id);
    }
    return (
        <li>
        {task}
        <input type="checkbox" checked={completed} onChange={changeItemClick}/>
        </li>
    )
}

export default TodoItem
