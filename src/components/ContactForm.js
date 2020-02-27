import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const Form = styled.form`
  margin-bottom: 3.4rem;
  max-width: 54rem;
  box-shadow: 0px 2px 8px -3px rgba(0, 0, 0, 0.75);
  padding: 1.4rem 1.6rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 2.4rem;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 2.2rem;
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.4rem 1.2rem 1.2rem;
  border-radius: 0.6rem;

  &:focus {
    border-color: #1d2bcc;
  }
`;

const Button = styled.button`
  display: block;
  font-size: 2rem;
  margin: 0 auto;
  width: 100%;
  padding: 1.8rem;
  border-radius: 1rem;
  background-color: #1d2bcc;
  cursor: pointer;
  color: snow;

  &:hover,
  &:focus {
    background-color: #404fff;
    color: snow;
    border-color: #333333;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    outline: none;
  }

  &:active {
    background-color: #7883ff;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 2rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };
  //

  render() {
    const { onAddContact } = this.props;
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = <ErrorText>Name is Required</ErrorText>;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, handleReset }) => {
          onAddContact(values.name, values.number);
          setSubmitting(false);
          handleReset();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          handleReset,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </Label>
            <Label>
              Number
              <Input
                type="tel"
                name="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              {errors.number && touched.number && errors.number}
            </Label>
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={() => setTimeout(() => handleReset(), 100)}
            >
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ContactForm;
