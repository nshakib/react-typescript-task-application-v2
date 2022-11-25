import React,{useState} from 'react'

import {
    RemoveTodo,
    OnToggleImportant,
    OnToggleLike,
    UpdateTodo,
    AddTodo,
    UpdateSearch,
    SearchTodo,
    UpdateFilter,
    FilterTodo,
    ITodo
  } from '../types/Type';
  import { initialTodo } from '../initialData/initialTask';
import Context from '../context/taskContext';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm'
import TaskHeader from './TaskHeader'
import TaskList from './TaskList'
import TaskSearch from './TaskSearch'


const Home = () => {

    const [todos, setTodos] = useState(initialTodo);
  const [term, setTerm] = useState('');
  const [filt, setFilt] = useState('all');

  const addTodo: AddTodo = (newData) => {
    setTodos((prevState) => ({
      data: [...prevState.data, newData]
    }));
  };

  const removeTodo: RemoveTodo = (id) => {
    const newData = todos.data.filter((ele) => ele.id !== id);
    setTodos({ data: newData });
  };

  const updateTodo: UpdateTodo = (id, newValue) => {
    let updatedTodo = todos.data.map((item) => (item.id === id ? newValue : item));
    setTodos({ data: updatedTodo });
  };

  const onToggleImportant: OnToggleImportant = (id) => {
    const newData = todos.data.map((ele) => {
      if (ele.id === id) {
        return { ...ele, important: !ele.important };
      }
      return ele;
    });
    setTodos({ data: newData });
  };

  const onToggleLike: OnToggleLike = (id) => {
    const newData = todos.data.map((ele) => {
      if (ele.id === id) {
        return { ...ele, like: !ele.like };
      }
      return ele;
    });
    setTodos({ data: newData });
  };

  const updateSearch: UpdateSearch = (text) => {
    setTerm(text);
  };

  const searchTodo: SearchTodo = (items, term) => {
    if (term === '') {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().includes(term.toLowerCase());
    });
  };

  const updateFilter: UpdateFilter = (filte) => {
    setFilt(filte);
  };

  const filterTodo: FilterTodo = (items, filt) => {
    if (filt === 'like') {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  const visibleTodos: ITodo[] = filterTodo(searchTodo(todos.data, term), filt);
  const likedTodo = todos.data.filter((item) => item.like).length;
  const allTodos = todos.data.length;
  return (
    <div className='app'>
        <TaskHeader likedTodo={likedTodo} allTodos={allTodos}/>
        <div className='search-panel d-flex'>
            <TaskSearch updateSearch={updateSearch}/>
            <TaskFilter filt={filt} updateFilter={updateFilter}/>
        </div>
        <TaskForm addTodo={addTodo}/>
        <Context.Provider value={{removeTodo, updateTodo, onToggleImportant, onToggleLike }}>
            <TaskList todos={visibleTodos}/>
        </Context.Provider>
        
    </div>
  )
}

export default Home