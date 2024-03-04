import { useEffect, useRef, useState } from "react";
import { Products, onChangeArgs } from "../Interfaces/interfaces";

interface useProductArgs {
  product: Products;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [count, setCount] = useState(value);

  const isControlled = useRef(!!onChange);

  const handleCount = (value: number) => {
 
if(isControlled.current){
  return onChange!({ count: value, product });
}

    const newValue = Math.max(count + value, 0);
    setCount(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return {
    count,
    handleCount,
  };
};
