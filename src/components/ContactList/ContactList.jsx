import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const buildMarkup = () => {
    const filteredContacts =
      contacts.length > 0
        ? filter
          ? contacts.filter(contact => contact.name.includes(filter))
          : contacts
        : [];

    const onDelete = contactId => {
      dispatch(deleteContact(contactId));
    };

    return filteredContacts.length > 0 ? (
      filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))
    ) : filteredContacts.length === 0 && contacts.length > 0 ? (
      <p>No matches for your filter :(</p>
    ) : (
      <p>There are no contacts in your phonebook =(</p>
    );
  };

  return (
    <div style={{ marginBottom: 230 }}>
      <ul>{buildMarkup()}</ul>
    </div>
  );
};

export default ContactList;
