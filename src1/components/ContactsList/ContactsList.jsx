import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import useLocalStorage from 'hooks/useLocalStorage';
import { useState } from 'react';
import { addAllContacts } from 'store/actions';

const ContactsList = () => {
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilter);

  const getFilteredUsers = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredUsers = getFilteredUsers();

  return (
    <ul>
      {filteredUsers.map(el => (
        <ContactItem user={el} key={el.id} />
      ))}
    </ul>
  );
};

export default ContactsList;

// ContactsList.propTypes = {
//   user: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   // deleteUser: PropTypes.func.isRequired,
// };

// <ul>
//   {user.map(el => (
//     <ContactItem user={el} key={el.id} deleteUser={deleteUser} />
//   ))}
// </ul>;
