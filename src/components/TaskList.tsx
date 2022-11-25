import { ITodo } from '../types/Type';
import TodoItem from './TaskItem';

interface TodoListProps {
  todos: ITodo[];
}

const TaskList = ({ todos }: TodoListProps) => {
  const elements = todos.map((todo) => {
    return (
      <div className='list-group-item' key={todo.id}>
        <TodoItem todo={todo} />
      </div>
    );
  });
  return <>{todos.length > 0 ? <div className='app-list'>{elements}</div> : <h4>No Todos!</h4>}</>;
}

export default TaskList