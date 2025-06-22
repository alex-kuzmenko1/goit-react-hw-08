import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        onChange={handleFilterChange}
      />
    </label>
  );
};