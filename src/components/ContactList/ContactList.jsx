//? Components
import Contact from '../Contact/Contact';
//? CSS
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
