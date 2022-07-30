import React, { useState } from 'react';
import TodoItemClass from "../../../stores/ToDoItemStore";
import { useStore } from "../../useStore";
import { onEnterPress } from "../../useEnter";
import './ToDoItem.css'

interface Props {
    todo: TodoItemClass;
}

export const TodoItem = ({ todo }: Props) => {
    const todoList = useStore();
    const [newText, setText] = useState('');
    const [isEditing, setEdit] = useState(false);

    const saveText = () => {
        if (newText.trim() === '') {
            return setEdit(false)
        }
        todo.updateText(newText);
        setEdit(false);
        setText('');
    };

    const doneStyle = () => {
        if (todo.isDone) {
            return {
                textDecoration: 'line-through',
                color: 'azure'
            }
        }

    }

    return (
        <div className="todo__item">
            {
                isEditing ?
                    <div className='item__changing'>
                        <input
                            className='changing__input'
                            type="text"
                            onKeyDown={onEnterPress(saveText)}
                            onChange={(e) => setText(e.target.value)}
                            placeholder={todo.text}
                        />
                        <button
                            className='changing__button'
                            onClick={saveText}
                        >
                            🖬
                        </button>
                    </div>
                    :
                    <div className='item__inProgress'>
                        <div className='inProgress__name'>
                            <p
                                className='inProgress__title'
                                style={doneStyle()}
                                onClick={todo.toggleIsDone}
                            >
                                {todo.text}
                            </p>
                        </div>

                        <div className='inProgress__buttons'>
                            <button
                                className='inProgress__edit'
                                onClick={() => setEdit(true)}
                            >
                                ✎
                            </button>
                            <button
                                className='inProgress__remove'
                                onClick={() => todoList.removeTodo(todo)}
                            >
                                X
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
};