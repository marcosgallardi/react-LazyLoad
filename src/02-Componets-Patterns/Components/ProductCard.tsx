import { createContext } from "react";
import styles from "../Styles/styles.module.css";

import { useProduct } from "../Hooks/useProduct";
import {
  ProductContextProps,
  ProductCardProps,
} from "../Interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { count, handleCount } = useProduct();
  return (
    <Provider value={{ count, handleCount, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
