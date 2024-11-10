//? Libraries
import { Formik, Form, Field } from 'formik';
//? CSS
import s from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={s.wrapper}>
      <Formik>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              name='username'
              type='text'
              placeholder='Type your name'
            ></Field>
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              name='number'
              type='text'
              placeholder='Type your number'
            ></Field>
          </label>
          <button className={s.btn}>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
