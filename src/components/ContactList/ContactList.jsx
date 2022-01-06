import { useEffect, memo, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemContact from './ItemContact';
import { contactsActions } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);

  const filter = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 1) {
      dispatch(contactsActions.changeFilter(''));
    }
  }, [contacts.length, dispatch]);

  const filterContacts = useMemo(() => {
    const normalizedData = filter.toLowerCase();

    const array = contacts.filter(item => {
      const normName = item.name.toLowerCase();
      return normName.includes(normalizedData);
    });

    return array;
  }, [contacts, filter]);

  return (
    <ul className={s.list}>
      {filterContacts.map(({ id, name, number }) => {
        return <ItemContact id={id} key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default memo(ContactList);
