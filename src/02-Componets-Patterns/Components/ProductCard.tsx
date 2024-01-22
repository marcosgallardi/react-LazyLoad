import { ReactElement, createContext } from "react";
import styles from "../Styles/styles.module.css";

import { useProduct } from "../Hooks/useProduct";
import { ProductContextProps, Products } from "../Interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Products;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {
  const { count, handleCount } = useProduct();
  return (
    <Provider value={{ count, handleCount, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
