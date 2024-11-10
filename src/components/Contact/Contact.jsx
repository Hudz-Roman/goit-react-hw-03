//? Libraries
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
//? CSS
import s from './Contact.module.css';

const Contact = ({ contact }) => {
  const { name, number } = contact;
  return (
    <li className={s.list_el}>
      <div className={s.user_info_wrapper}>
        <span className={s.user_info}>
          <FaUser />
          {name}
        </span>
        <span className={s.user_info}>
          <FaPhone />
          {number}
        </span>
      </div>
      <button className={s.btn}>Delete</button>
    </li>
  );
};

export default Contact;
