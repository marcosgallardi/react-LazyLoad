import { useState } from "react";
import { Products, onChangeArgs } from "../Interfaces/interfaces";

interface useProductArgs {
  product: Products;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange,product }: useProductArgs) => {
  const [count, setCount] = useState(0);
  const handleCount = (value: number) => {
    const newValue = Math.max(count + value, 0);
    setCount(newValue);
    onChange && onChange({ count: newValue,product });
  };

  return {
    count,
    handleCount,
  };
};
