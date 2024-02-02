import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../Styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { count, handleCount } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
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
