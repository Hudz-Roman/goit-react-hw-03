//? Libraries
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
//? CSS
import s from './ContactForm.module.css';

const ContactForm = ({ handleAddContact }) => {
  const [formValues, setFormValues] = useState({ name: '', number: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContact(formValues);
    setFormValues({ name: '', number: '' });
  };

  return (
    <div className={s.wrapper}>
      <Formik>
        <Form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              name='name'
              type='text'
              placeholder='Type your name'
              value={formValues.name}
              onChange={handleChange}
            ></Field>
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              name='number'
              type='text'
              placeholder='Type your number'
              value={formValues.number}
              onChange={handleChange}
            ></Field>
          </label>
          <button type='submit' className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
