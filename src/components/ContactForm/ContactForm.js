import React, { Component } from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(9).required(),
});
export class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };
  handlerSubmit = (values, { resetForm }) => {
    this.props.onSubmit({ ...values });
    resetForm();
  };
  render() {
    return (
      <div className={css.contactform}>
        <h2>Phonebook</h2>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.handlerSubmit}
          validationSchema={schema}
        >
          <Form className={css.form}>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="tel">Number</label>
            <Field
              id="tel"
              type="number"
              name="number"
              placeholder="Your phone number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
