import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  height: 50px;
  position: relative;
`;

export const Field = styled(FormikField)`
  border-radius: 50px 0 0 50px;
  width: 200px;
  height: 30px;
  padding-left: 15px;
  border: none;
`;

export const Button = styled.button`
  border-radius: 0 50px 50px 0;
  height: 30px;
  border: none;
  font-size: 24px;
  color: red;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 20px;
  position: absolute;
  bottom: -20px;
`;
