import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const resetForm = () => {
    setFormData({ ...initialState });
  };

  return { ...formData, formData, onChange, resetForm };
};
