import styles from "../Styles/styles.module.css";
import noImage from "../Assets/no-image.jpg";
import { useProduct } from "../Hooks/useProduct";

interface Props {
  product: products;
}

interface products {
  id: number;
  title: string;
  img?: string;
}

export const ProductCard = ({ product }: Props) => {
  const { count, handleCount } = useProduct();
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage}
        alt="coffee-image"
      />

      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => handleCount(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{count}</div>
        <button className={styles.buttonAdd} onClick={() => handleCount(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
