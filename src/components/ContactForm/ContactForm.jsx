//? Libraries
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
// import * as Yup from 'yup';
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
  // const orderSchema = Yup.object().shape({
  // name: Yup.string()
  // .min(3, 'Should be 3 or more symbols')
  // .max(50, 'Should be less than 50 symbols')
  // .required('Required'),
  // number: Yup.string()
  // .min(3, 'Should be 3 or more symbols')
  // .max(50, 'Should be less than 50 symbols')
  // .required('Required'), // });

  // const initialValues = {
  //   name: '',
  //   number: '',
  // };
  return (
    <div className={s.wrapper}>
      {' '}
      <Formik
      // validationSchema={orderSchema}
      // initialValues={initialValues}
      >
        <Form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              name='name'
              placeholder='Type your name'
              type='text'
              value={formValues.name}
              onChange={handleChange}
            ></Field>
            {/* <ErrorMessage name='name' component='span' className={s.error} /> */}
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              name='number'
              placeholder='Type your number'
              type='text'
              value={formValues.number}
              onChange={handleChange}
            ></Field>
            {/* <ErrorMessage name='number' component='span' className={s.error} /> */}
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
