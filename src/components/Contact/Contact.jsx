import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li className={css.item}>
      <span className={css.name}>{name}</span>
      <span className={css.number}>{number}</span>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}