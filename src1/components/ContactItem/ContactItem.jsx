// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'store/actions';

const ContactItem = ({ user: { name, number, id } }) => {
  const dispatch = useDispatch();

  const deleteUser = id => dispatch(deleteContact(id));

  return (
    <li className={css['contact-item']}>
      <p className={css['contact-text']}>
        {name}: {number}
      </p>
      <button
        className={css['btn-delete']}
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
