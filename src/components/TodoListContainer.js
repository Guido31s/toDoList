import React, {
    useState,
    useEffect,
    useRef
} from 'react'
import TodoList from './TodoList'
import {
    v4 as uuidv4
} from "uuid"


const KEY = "TasksApp.items"

const TodoListContainer = () => {
    const [items, setItems] = useState([

    ])

    const taskRef = useRef();

    const addTask = () => {
        const task = taskRef.current.value;
        if (task === "") return;

        setItems((array) => {
            return [...array, {
                id: uuidv4(),
                task,
                completed: false
            }]
        });

        taskRef.current.value = null;
    };

    const clearTasks = () => {
        const newItem = items.filter((a) => !a.completed);
        setItems(newItem)
    }

    const changeItem = (id) => {
        const newItem = [...items];
        const item = newItem.find((todo) => todo.id === id);
        item.completed = !item.completed;
        setItems(newItem)
    }

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(KEY))
        if (tasks) {
            setItems(tasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(items))
    }, [items])
    return ( <>
        <input ref = {taskRef}
        type = "text"
        placeholder = "Añade una tarea" />
        <button onClick = {addTask} >➕</button>
        <button onClick = {clearTasks}>✖</button>
        <TodoList changeItem = {changeItem} todos = {items}/>
        <p> Faltan {items.filter((array) => !array.completed).length } tareas para terminar </p> 
         </>
    )
}

export default TodoListContainer