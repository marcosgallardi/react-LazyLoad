import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../Styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className,style }: Props) => {
  const { product } = useContext(ProductContext);
  let titleCurrent: string;
  if (title) {
    titleCurrent = title;
  } else {
    titleCurrent = product.title;
  }

  return (
    <span className={`${styles.productDescription} ${className} `}
    style={style}>
      {titleCurrent}
    </span>
  );
};
