import { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const initialState = {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };
  const {
    name,
    password1,
    password2,
    email,
    formData,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm(initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
  };

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          name="name"
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}  `}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}  `}
        />

        {!isValidEmail(email) && <span>Email es necesario</span>}

        <input
          type="password"
          placeholder="password"
          value={password1}
          name="password1"
          onChange={onChange}
        />
        {password1.trim().length <= 0 && (
          <span>Esta password es necesario</span>
        )}
        <input
          type="password"
          placeholder="password"
          value={password2}
          name="password2"
          onChange={onChange}
        />

        {password2.trim().length <= 0 && (
          <span>Esta password es necesario</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset form
        </button>
      </form>
    </div>
  );
};
