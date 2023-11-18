import React from 'react';
import { Formik } from 'formik';
import { Form, Field, Button, ErrorMessage } from './SearchBar.styled';
import * as Yup from 'yup';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  const validation = Yup.object().shape({
    target: Yup.string().min(2, 'Too short!').required('Required!'),
  });
  return (
    <Formik
      initialValues={{
        target: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
      validationSchema={validation}
    >
      <Form>
        <Field name="target" placeholder="Forest" />
        <ErrorMessage name="target" component="span" />

        <Button type="submit">
          <CiSearch />
        </Button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
