import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const AuthorForm = ({onSubmit, initialValues, btnText}) => {

  const AuthorErrors = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be longer than 3 characters")
      .required("Name is required")
  })

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={AuthorErrors}
      >
        {({errors, touched, isValid, dirty})=> (
        <Form className="container">
          <div>
            <label htmlFor="name" className="form-label fs-3 ms-1">Author Name:</label>
            <Field className="form-control" name='name' placeholder='name'/>
            {(touched.name && errors.name) ? <span className="text-danger ms-2">{errors.name}</span> : <div style={{height: '24px'}}></div>}
          </div>
          <button type="submit" className="btn btn-outline-success ms-1" disabled={!(isValid && dirty)}>{btnText}</button>
          <Link className="btn btn-outline-warning ms-1" to={'/'}>Cancel</Link>
        </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthorForm;
