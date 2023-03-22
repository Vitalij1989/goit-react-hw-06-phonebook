// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <FilterInput
        type="text"
        placeholder=" "
        onChange={e => dispatch(setFilter(e.target.value))}
      ></FilterInput>
      <FilterLabel>Find contacts by name</FilterLabel>
    </FilterContainer>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
