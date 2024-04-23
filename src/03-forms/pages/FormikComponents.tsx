import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El email no es valido")
            .required("Requerido"),
        })}>
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span"/>

            <label htmlFor="lastName">last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span"/>
            <label htmlFor="Email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span"/>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <h1>FormikComponents</h1>
    </div>
  );
};
