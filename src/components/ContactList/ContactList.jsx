//? Components
import Contact from '../Contact/Contact';
//? CSS
import s from './ContactList.module.css';

const ContactList = () => {
  return (
    <ul className={s.list}>
      <Contact />
    </ul>
  );
};

export default ContactList;
