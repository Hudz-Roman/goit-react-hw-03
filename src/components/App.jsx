//? Components
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
//? Libraries
import { useState } from 'react';
import { nanoid } from 'nanoid';
//? CSS
import '../index.css';
import 'modern-normalize';
function App() {
  const [contacts, setContacts] = useState([]);

  //!!! Search contact
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // useEffect(() => {
  //   const results = contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm, contacts]);

  //Add contact
  const handleAddContact = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: nanoid() }]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox
      // handleSearchChange={handleSearchChange}
      />
      <ContactList
        contacts={contacts}
        // searchResults={searchResults}
      />
    </div>
  );
}

export default App;
