import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsPage.module.css';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import { getContacts } from '../../redux/contacts/contactsOperations';
import { contactsSelectors } from '../../redux/contacts';
import { authSelectors } from '../../redux/auth';
import Loader from '../../components/LoaderModal';

const ContactsPage = () => {
  const token = useSelector(authSelectors.getToken);
  const contacts = useSelector(contactsSelectors.getContacts);
  const loading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts(token));
  }, [dispatch, token]);

  const isAddContact = !error && !contacts.length;
  return (
    <div>
      {loading && <Loader />}
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {isAddContact && <p>Please, add contact!</p>}
      {!!contacts.length && <ContactList />}
      {error && <p className={s.errorMess}>{error.message}</p>}
    </div>
  );
};

export default ContactsPage;
