import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function MobsterForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="mobsterName"
        component="input"
        type="text"
        placeholder="Name of mobster"
      />
      <button type="submit">
        Add mobster
      </button>
    </form>
  );
}

// TODO: This is only unit tested, also need integration tests...
// TODO: See - https://github.com/tylercollier/redux-form-test
export const FORM_NAME = 'mobsterForm';
export default reduxForm({
  form: FORM_NAME,
})(MobsterForm);
