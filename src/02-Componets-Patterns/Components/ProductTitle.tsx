import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../Styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  let titleCurrent: string;
  if (title) {
    titleCurrent = title;
  } else {
    titleCurrent = product.title;
  }

  return <span className={styles.productDescription}>{titleCurrent}</span>;
};
