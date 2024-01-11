import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
// import { addContact } from 'store/actions';
import { getContacts } from 'store/selectors';
import { addContact } from 'store/contactsSlice';

const ContactForm = ({ createUser }) => {
  // const [stateName, setStateName] = useState('');
  // const [stateNumber, setStateNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // console.log(contacts);
  // console.log(stateName);
  // console.log(stateNumber);

  // useEffect(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  //   []
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // console.log(state);

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       setStateName(value);
  //       break;

  //     case 'number':
  //       setStateNumber(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isDuplicated = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));

    // window.localStorage.setItem('contacts', JSON.stringify(contacts));

    // createUser({ name, number });

    // setName('');
    // setNumber('');

    form.reset();
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css['contact-form-input']}
          // onChange={handleChange}
          // value={stateName}
          type="text"
          name="name"
          required
        />
      </label>

      <label>
        Number
        <input
          className={css['contact-form-input']}
          // onChange={handleChange}
          // value={stateNumber}
          type="tel"
          name="number"
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
  // }
};

export default ContactForm;

ContactForm.propTypes = {
  // createUser: PropTypes.func.isRequired,
};
