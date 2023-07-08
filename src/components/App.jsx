import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { setState } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setState(JSON.parse(storedContacts)));
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        color: '#010101',
        backgroundColor: 'yellowgreen',
        gap: 50,
      }}
    >
      <h1>Redux Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
