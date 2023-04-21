import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <p>{name}</p>
      <p>{number}</p>
      <button data-num={id} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDelete: PropTypes.func.isRequired,
};
