interface TodoHeaderProps {
  likedTodo: number;
  allTodos: number;
}



const TaskHeader = ({ likedTodo, allTodos }: TodoHeaderProps) => {
  return (
    
    <div className='app-header d-flex'>
      <h1>Todo List</h1>
      <h2>
        {allTodos} records, from them liked {likedTodo}{' '}
      </h2>
    </div>
  )
}

export default TaskHeader