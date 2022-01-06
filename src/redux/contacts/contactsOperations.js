import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

const getContacts = createAsyncThunk('contacts/getContactsStatus', token =>
  api.getAllContacts(token),
);

const addContact = createAsyncThunk(
  'contacts/addContactStatus',
  ({ newItem, token }) => {
    return api.saveItem(newItem, token);
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContactStatus',
  ({ id, token }) => api.deleteItem(id, token).then(() => id),
);

export { getContacts, addContact, deleteContact };
