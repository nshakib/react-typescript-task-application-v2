import { UpdateFilter, OnSelect } from '../types/Type';

interface TodoFilterProps {
  updateFilter: UpdateFilter;
  filt: string;
}

const TaskFilter = ({ updateFilter, filt }: TodoFilterProps) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'like', label: 'Liked' }
  ];

  const onSelect: OnSelect = (item) => {
    updateFilter(item.name);
  };

  const butt = buttons.map((item) => {
    const active = filt === item.name;
    const classes = active ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button key={item.name} className={`btn ${classes}`} onClick={() => onSelect(item)}>
        {item.label}
      </button>
    );
  });
  return <div className='btn-group'>{butt}</div>;
}
export default TaskFilter;