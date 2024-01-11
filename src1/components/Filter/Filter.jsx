import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'store/selectors';
import { setFilter } from 'store/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const searchUser = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const filterValue = useSelector(getFilter);

  return (
    <label>
      <p className={css['filter-text']}>Find contacts by name</p>
      <input
        className={css['filter-input']}
        onChange={searchUser}
        value={filterValue}
        type="text"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  // searchUser: PropTypes.func.isRequired,
};
