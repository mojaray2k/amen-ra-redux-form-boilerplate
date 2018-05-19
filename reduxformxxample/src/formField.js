import React  from 'react';
import { Field } from 'redux-form';

const FormField = function(props){
  
  const { input, label, type, meta: { touched, error}} = props
  const errorMessage = (touched && error) ? <span>{error}</span> : null

  return (
    <div className="form-Field">
      <label>{label}</label>
      <div>
        <input {...input} type={type} name="email" />
        {errorMessage}
      </div>
    </div>
  );
}

export default FormField;
