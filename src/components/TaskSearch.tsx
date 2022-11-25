import { UpdateSearch } from '../types/Type';

interface TodoSearchProps {
  updateSearch: UpdateSearch;
}


const TaskSearch = ({ updateSearch }: TodoSearchProps) => {
  const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    updateSearch(text);
  };

  return (
    <div>
      <input className='form-control search-input' type='text' placeholder='search' onChange={onUpdate} />
    </div>
  )
}

export default TaskSearch