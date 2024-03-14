import { useFormik } from "formik";

import "../styles/styles.css";

export const FormikBasicPage = () => {
  const { handleChange, values,handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />

        <label htmlFor="lastName">last name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="Email"
          onChange={handleChange}
          value={values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
