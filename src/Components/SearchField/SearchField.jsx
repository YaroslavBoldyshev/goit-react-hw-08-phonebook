import { Label } from '../common/Label/Label';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const SearchField = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      ></input>
    </Label>
  );
};
