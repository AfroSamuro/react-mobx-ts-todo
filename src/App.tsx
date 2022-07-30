import React from 'react';
import './reset.css'
import './App.css';
import { TodoList } from './components/toDo/toDoList/ToDoList';
import { TodoNew } from './components/toDo/toDoNew/ToDoNew';

function App() {
  return (
    <div className="app">
      <h1 className='app__title'>
        Список дел
        </h1>
      <TodoNew />
      <TodoList />
    </div>
  );
}

export default App;
