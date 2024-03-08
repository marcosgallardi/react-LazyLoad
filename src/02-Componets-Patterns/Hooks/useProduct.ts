import { useEffect, useRef, useState } from "react";
import {
  InitialValues,
  Products,
  onChangeArgs,
} from "../Interfaces/interfaces";

interface useProductArgs {
  product: Products;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [count, setCount] = useState<number>(initialValues?.count || value);

  const isControlled = useRef(!!onChange);

  const handleCount = (value: number) => {
    if (isControlled.current) {
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
