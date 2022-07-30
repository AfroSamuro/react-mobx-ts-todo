
import { useContext } from 'react';
import { StoreContext } from './StoreProvider';
import {TodoList} from "../stores/ToDoListStore";

export const useStore = (): TodoList => useContext(StoreContext);