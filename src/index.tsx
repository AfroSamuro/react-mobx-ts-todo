import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodoList } from "./stores/ToDoListStore";
import { StoreProvider } from './components/StoreProvider';


const todoList = new TodoList([
  'пресс качат',
  'бегит',
  'анжуманя'
]);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={todoList}>
      <App />
    </StoreProvider>
  </React.StrictMode>
  , document.getElementById('root'));

reportWebVitals();
