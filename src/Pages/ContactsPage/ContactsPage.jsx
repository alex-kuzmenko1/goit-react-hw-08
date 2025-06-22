import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Your contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}