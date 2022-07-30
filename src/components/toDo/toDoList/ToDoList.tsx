import React, { useState } from 'react';
import { useStore } from "../../useStore";
import { TodoItem } from "../toDoItem/ToDoItem";
import { useObserver } from "mobx-react-lite";
import './ToDoList.css'

export const TodoList = () => {
    const todoList = useStore();
    const [value, setValue] = useState('all')

    return useObserver(() => (
        <div className="todo__list">
            <select
                className='list__select'
                value={value}
                onChange={event => setValue(event.target.value)}
            >
                <option value="all">Все</option>
                <option value="done">Выполненные</option>
                <option value="undone">Невыполненные</option>
            </select>
            <div className="list__opened">
                {value === 'done' ?
                    todoList.finishedTodos.length !== 0 ?
                        todoList.finishedTodos.map(todo =>
                            <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
                        ) :
                        <p className='opened__empty'>
                            ¯\_(ツ)_/¯
                        </p> :
                    value === 'undone' ?
                        todoList.openTodos.length !== 0 ?
                            todoList.openTodos.map(todo =>
                                <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
                            ) :
                            <p className='opened__empty'>
                                ¯\_(ツ)_/¯
                            </p> :
                        value === 'all' ?
                            todoList.openTodos.length !== 0 ||
                                todoList.finishedTodos.length !== 0 ?
                                todoList.openTodos.concat(todoList.finishedTodos).map(todo =>
                                    <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
                                ) :
                                <p className='opened__empty'>
                                    ¯\_(ツ)_/¯
                                </p> :
                            null
                }
            </div>
        </div>
    ));
};