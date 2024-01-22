import { useContext } from "react";
import noImage from "../Assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../Styles/styles.module.css";

interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img = "", className }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="coffee" />;
};
