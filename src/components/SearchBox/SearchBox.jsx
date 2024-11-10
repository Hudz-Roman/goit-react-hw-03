import { Form, Field, Formik } from 'formik';
import s from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={s.wrapper}>
      <Formik>
        <Form className={s.form}>
          <span>Find contacts by name</span>
          <Field></Field>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
