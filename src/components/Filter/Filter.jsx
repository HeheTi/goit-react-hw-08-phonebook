import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import Input from '../../common/Input';
import { contactsActions } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import s from './Filter.module.css';

function Filter({ filter, onChangeFilter }) {
  const onChangeFilterValue = useCallback(
    e => {
      const value = e.target.value.trim();
      onChangeFilter(value);
    },
    [onChangeFilter],
  );

  return (
    <div className={s.wrapperFilter}>
      <Input
        label="Find contacts by name"
        type="text"
        onChange={onChangeFilterValue}
        name="filter"
        value={filter}
      />
    </div>
  );
}

// УНИВЕРСАЛЬНЫЙ СПОСОБ СВЯЗАТЬ РЕДАКС С КОМПОНЕНЬЛМ (РАБОТАЕТ И ДЛЯ КДАССОВ, И ДЛЯ ФУНКЦИИ)

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

// УНИВЕРСАЛЬНЫЙ СПОСОБ СВЯЗАТЬ РЕДАКС С КОМПОНЕНЬЛМ (РАБОТАЕТ И ДЛЯ КДАССОВ, И ДЛЯ ФУНКЦИИ)

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(contactsActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
