import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Input from '../../common/Input';
import { addContact } from '../../redux/contacts/contactsOperations';
import { contactsSelectors } from '../../redux/contacts';
import { authSelectors } from '../../redux/auth';
import { normalizeName } from '../../services/normalize';
import { toast } from 'react-toastify';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const token = useSelector(authSelectors.getToken);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const addDataForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  const onSubFormData = e => {
    e.preventDefault();

    addContacts({ name, number });

    resetForm();
  };

  const addContacts = newItem => {
    const isHaveName = contacts.some(({ name }) => name === newItem.name);

    if (isHaveName) {
      return toast.error(
        `${normalizeName(newItem.name)} is alredy in contacts.`,
        {
          theme: 'colored',
        },
      );
    }

    dispatch(addContact({ newItem, token }));
  };

  return (
    <div className={s.form}>
      <Box
        component="form"
        onSubmit={onSubFormData}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Input
          label="Name"
          type="text"
          name="name"
          onChange={addDataForm}
          value={name}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <Input
          label="Number"
          type="tel"
          name="number"
          onChange={addDataForm}
          value={number}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <button type="submit" className={s.btnAdd}>
          Add contact
        </button>
      </Box>
    </div>
  );
};

export default ContactForm;
