import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
export const Contacts = ({ onDelete, contacts, filter }) => {
  return (
    <div className={css.container}>
      <h2>Contacts</h2>
      <ul className={css.list}>
        {contacts
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => (
            <ContactItem
              key={item.id}
              name={item.name}
              number={item.number}
              onDelete={onDelete}
              id={item.id}
            />
          ))}
      </ul>
    </div>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired
  ).isRequired,

  filter: PropTypes.string.isRequired,
};
