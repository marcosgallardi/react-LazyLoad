import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../Components";

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
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className="container">
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard product={products[0]} className="bg-dark text-white">
          <ProductImage className="custom-image" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={products[1]} className="bg-dark text-white">
          <ProductImage className="custom-image" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
