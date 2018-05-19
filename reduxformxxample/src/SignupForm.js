import React, { Component } from 'react';
import { reduxForm, Field }  from 'redux-form';
import FormField from './formField';
import { validate } from 'validate.js';
import formValidator from './formValidator';

const constraints = {
  email: {email: true}
  password: { length: {minimum: 2}}
}

class SignupForm extends Component {
  submit(values){
    console.log('Values', values)
  }

  render() {
    const { submitting, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.submit)}>

        <Field name="email" component={FormField} type="email" />
        <Field name="password" component={FormField} type="password" />
        <button type="submit" disabled>{submitting}Submit</button>

      </form>
    );
  }
}

export default reduxForm({
  form: 'SignupForm',
  validate: formValidator(constraints)
})(SignupForm);
