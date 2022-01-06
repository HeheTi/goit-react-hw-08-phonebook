import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../../redux/contacts/contactsOperations';
import { normalizeName } from '../../../services/normalize';
import s from './ItemContact.module.css';

const ItemContact = ({ name, number, id }) => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      {normalizeName(name)}: {number}
      <button
        className={s.btnDel}
        onClick={() => dispatch(deleteContact({ id, token }))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ItemContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
};

export default ItemContact;
