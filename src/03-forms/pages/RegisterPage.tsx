import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = registerData;

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [target.name]: target.value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault()
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
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password1}
          name="password1"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password2}
          name="password2"
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
