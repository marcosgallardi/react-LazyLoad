import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../Styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);
  let titleCurrent: string;
  if (title) {
    titleCurrent = title;
  } else {
    titleCurrent = product.title;
  }

  return (
    <span className={`${styles.productDescription} ${className} `}>
      {titleCurrent}
    </span>
  );
};
