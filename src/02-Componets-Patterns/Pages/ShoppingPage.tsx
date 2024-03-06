import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../Components";

import "../Styles/custom-styles.css";
import { products } from "../data/data";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount:10
        }}>
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </>
  );
};
