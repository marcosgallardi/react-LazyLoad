import { ReactElement } from "react";
import styles from "../Styles/styles.module.css";
import noImage from "../Assets/no-image.jpg";
import { useProduct } from "../Hooks/useProduct";

interface Props {
  product: products;
  children?: ReactElement | ReactElement[];
}

interface products {
  id: number;
  title: string;
  img?: string;
}

interface ProductButtonsProps {
  count: number;
  handleCount: (value: number) => void;
}

export const ProductImage = ({ img = "" }) => {
  return (
    <img className={styles.productImg} src={img ? img : noImage} alt="coffee" />
  );
};

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

export const ProductButtons = ({ count, handleCount }: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => handleCount(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{count}</div>
      <button className={styles.buttonAdd} onClick={() => handleCount(+1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ children, product }: Props) => {
  const { count, handleCount } = useProduct();
  return (
    <div className={styles.productCard}>
      {children}
      {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons count={count} handleCount={handleCount} /> */}
    </div>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
