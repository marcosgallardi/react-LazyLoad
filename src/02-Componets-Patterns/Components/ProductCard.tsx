import { CSSProperties, ReactElement, createContext } from "react";
import styles from "../Styles/styles.module.css";

import { useProduct } from "../Hooks/useProduct";
import {
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
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { count, handleCount } = useProduct({ onChange, product ,value});
  return (
    <Provider value={{ count, handleCount, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
