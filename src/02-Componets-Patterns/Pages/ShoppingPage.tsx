import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../Components";
import { Products } from "../Interfaces/interfaces";

import "../Styles/custom-styles.css";

const products = [
  {
    id: 1,
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png",
  },
  {
    id: 2,
    title: "Coffee Mug - Meme",
    img: "./coffee-mug2.png",
  },
];

export const ShoppingPage = () => {
  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Products;
  }) => {
    console.log("onProductCountChange", product);
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className="container">
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={(e) => onProductCountChange(e)}>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={products[0]}
          className="bg-dark text-white"
          style={{ width: "150px" }}
          // onChange={() => onProductCountChange(products[0])}
        >
          <ProductImage className="custom-image" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={products[1]}
          className="bg-dark text-white"
          style={{ width: "150px" }}
          // onChange={() => onProductCountChange(products[1])}
        >
          <ProductImage className="custom-image" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
