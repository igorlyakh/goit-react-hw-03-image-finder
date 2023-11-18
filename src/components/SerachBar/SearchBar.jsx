import React from 'react';
import { Formik } from 'formik';
import { Form, Field, Button, ErrorMessage } from './SearchBar.styled';
import * as Yup from 'yup';
import { CiSearch } from 'react-icons/ci';
import { getImages } from 'components/api';

const SearchBar = () => {
  const validation = Yup.object().shape({
    target: Yup.string().min(2, 'Too short!').required('Required!'),
  });
  return (
    <Formik
      initialValues={{
        target: '',
      }}
      onSubmit={async (values, actions) => {
        try {
          const data = await getImages(values, 1);
        } catch {
          console.error('ERROR!');
        }
        actions.resetForm();
      }}
      validationSchema={validation}
      validateOnBlur={false}
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
