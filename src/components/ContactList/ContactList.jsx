import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  const contactsToRender = filteredContacts.length > 0 ? filteredContacts : contacts;

  return (
    <ul className={css.contactList}>
      {contactsToRender.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};