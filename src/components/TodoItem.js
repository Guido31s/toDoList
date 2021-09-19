import { Button, Checkbox } from '@mui/material';
import React from 'react'

const TodoItem = ({ todo, changeItem, onRemove }) => {
    const {id, task, completed} = todo

    const changeItemClick = () => {
        changeItem(id);
    }
    return (
        <li>
        {task}
        <Checkbox checked={completed} color="success" onChange={changeItemClick} />
        <Button variant="contained" color="error" size="small" onClick={() => onRemove(id)}>✖</Button>
        </li>
    )
}

export default TodoItem
