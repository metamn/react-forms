# react-forms

Playin' with React form libraries.

## Goal

The goal is to find / build / combine something which:

1. Describes the form via JSON

- All input fields has to be supported
- Grouping and sub-grouping has to be supported

2. Auto generates the form fields using a theme (Material UI, Bootstrap, self made, etc.)

- Every aspect of the theme must be customizable

3. Does validation and error messaging

- Done automatically from the schema

4. Is extendable

- The whole business logic mut be customizable, like:
  - Adding query param support
  - Connected fields: a field value determines the state of the other field values
  - Internationalization

## Final Form

- https://final-form.org/react
- https://final-form.org/docs/react-final-form/examples

### Pro

- It has a huge set of examples for various use cases
- It seems to be highly adaptable / extendable

### Con

- Incomplete / airy docs
- Renderprops syntax
- No examples with hooks

## Formik

- https://jaredpalmer.com/formik/

### Pro

- The first tutorial is done with hooks
- It has a huge focus on validation

### Con

- The simplest text input example gives and error when typing in the text (it had no initial values set ...)
- Cannot use proptypes for validations: https://github.com/jaredpalmer/formik/issues/1424 ... Yup is preferred ...
- A very few examples only
- An one man show

## react-jsonschema-form

- https://github.com/rjsf-team/react-jsonschema-form
- Supported input types: https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/core/src/components/widgets
- Supported data types: https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/core/src/components/fields

### Pro

- Declarative form syntax including schema for data, ui, errors / validations
- Supports Bootstrap out of the box, plus Material UI: https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/material-ui
- built by Mozilla:

### Con

- Seems having more features than necessary (for simple use cases)
