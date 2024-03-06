import { CSSProperties, ReactElement, createContext } from "react";
import styles from "../Styles/styles.module.css";

import { useProduct } from "../Hooks/useProduct";
import {
  InitialValues,
  ProductContextProps,
  Products,
  onChangeArgs,
} from "../Interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Products;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { count, handleCount } = useProduct({ onChange, product ,value,initialValues});
  return (
    <Provider value={{ count, handleCount, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
