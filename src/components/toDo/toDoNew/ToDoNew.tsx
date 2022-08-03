import React, { useState } from 'react';
import { useStore } from "../../useStore";
import { onEnterPress } from "../../useEnter";
import './ToDoNew.css'

export const TodoNew = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        if (newTodo.trim() === '') return
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (
        <div className="todo__new">
            <input
                className='new__input'
                type="text"
                value={newTodo}
                onKeyDown={onEnterPress(addTodo)}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Что бы вы хотели сделать?'
            />
            <button
                className='new__button'
                onClick={addTodo}
            >
                +
            </button>
        </div>
    )
};