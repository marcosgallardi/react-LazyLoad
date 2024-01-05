import styles from "../Styles/styles.module.css";
import noImage from "../Assets/no-image.jpg";
import { useState } from "react";

export const ProductCard = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value: number) => {
    setCount((prev) => Math.max(prev + value, 0));
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={noImage} alt="coffee-image" />
      {/* <img className={styles.productImg} src="./coffee-mug.png" alt="" /> */}
      <span className={styles.productDescription}>Coffee Mug</span>
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
