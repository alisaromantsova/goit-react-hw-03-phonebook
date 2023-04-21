import PropTypes from 'prop-types';
export const Filter = ({ onChange, filter }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => onChange(e)}
        value={filter}
      />
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
