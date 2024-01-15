import { useContext } from "react";
import noImage from "../Assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../Styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={styles.productImg} src={imgToShow} alt="coffee" />;
};
