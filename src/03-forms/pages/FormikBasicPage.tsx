import { FormikErrors, useFormik } from "formik";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const error: FormikErrors<FormValues> = {};

    if (!firstName) {
      error.firstName = "Required";
    } else if (firstName.length > 15) {
      error.firstName = "Must be 15 characters or less";
    }
    if (!lastName) {
      error.lastName = "Required";
    } else if (lastName.length > 15) {
      error.firstName = "Must be 15 characters or less";
    }
    if (!email) {
      error.email = "Required";
    } else if (email.length > 15) {
      error.firstName = "Must be 15 characters or less";
    }
    return error;
  };
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1>Formik basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">last name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
