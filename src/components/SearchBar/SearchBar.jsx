import React from 'react';
import { Formik } from 'formik';
import { Form, Field, Button, ErrorMessage } from './SearchBar.styled';
import * as Yup from 'yup';
import { CiSearch } from 'react-icons/ci';
import { getImages } from 'components/api';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmitData, page, onNewSearch, toggleLoader }) => {
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
          toggleLoader();
          onNewSearch();
          const data = await getImages(values.target, page);
          const { hits, totalHits } = data;
          const { target } = values;
          const pages = Math.ceil(totalHits / 12);
          onSubmitData(target, hits, pages);
        } catch {
          toast.error('Request error! Reload page and try again!');
          console.error('ERROR!');
        } finally {
          toggleLoader();
          actions.resetForm();
        }
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
