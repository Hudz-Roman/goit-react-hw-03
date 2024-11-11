//? Components
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
//? Libraries
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
//? CSS
import '../index.css';
import 'modern-normalize';

function App() {
  //* Save to localStorage
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('Contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  //* Filter contacts
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = contacts.filter((contact) => contact.name.includes(value));
    setFilteredContacts(filtered);
  };

  //* Add contact
  const handleAddContact = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: nanoid() }]);
  };

  //* Delete contact
  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
