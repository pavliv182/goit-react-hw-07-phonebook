import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import { removeContact } from 'redux/contacts/contacts-operations';

import css from './contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items } = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const deleteContact = id => {
    dispatch(removeContact(id));
    Notify.info('Contact deleted from your phonebook');
  };

  const filterContacts = () => {
    if (filter) {
      const filteredContacts = items.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }

    return items;
  };

  const data = filterContacts();

  const elements = data.map(el => (
    <li className={css.item} key={el.id}>
      <span>
        {el.name}: {el.number}
      </span>
      <button type="button" onClick={() => deleteContact(el.id)}>
        Delete
      </button>
    </li>
  ));

  return <>{Boolean(data.length) && <ul>{elements}</ul>}</>;
};

export default Contacts;
