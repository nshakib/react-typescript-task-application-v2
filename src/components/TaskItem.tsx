import { useContext, useState } from 'react';
import Context from '../context/taskContext';
import { ITodo } from '../types/Type';
import TodoForm from './TaskForm';

interface TodoItemProps {
  todo: ITodo;
}

const TaskItem = ({ todo }: TodoItemProps) => {
  const { removeTodo, updateTodo, onToggleImportant, onToggleLike } = useContext(Context);
  const [edit, setEdit] = useState({
    id: 0,
    label: ''
  });
  const editTodo = (todo: ITodo) => {
    updateTodo(edit.id, todo);
    setEdit({
      id: 0,
      label: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} addTodo={editTodo} />;
  }

  let classNames = 'app-list-item d-flex justify-content-between';
  if (todo.important) {
    classNames += ' important';
  }
  if (todo.like) {
    classNames += ' like';
  }
  return (
    <div className={classNames}>
      <span onClick={() => onToggleLike(todo.id)} className='app-list-item-label'>
        {todo.label}
      </span>
      <div className='d-flex justify-content-center align-itme-center'>
        <button onClick={() => onToggleImportant(todo.id)} className='btn-star btn-sm bg' type='button'>
          <i className='fa fa-star'></i>
        </button>
        <button onClick={() => removeTodo(todo.id)} className='btn-trash btn-sm bg' type='button'>
          <i className='fa fa-trash-o'></i>
        </button>
        <button
          onClick={() => setEdit({ id: todo.id, label: todo.label })}
          className='btn-trash btn-sm bg'
          type='button'
        >
          <i className='fa fa-pencil'></i>
        </button>
        <i className='fa fa-heart'></i>
      </div>
    </div>
  )
}

export default TaskItem