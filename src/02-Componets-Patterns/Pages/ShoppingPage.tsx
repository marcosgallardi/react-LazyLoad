import { useState } from "react";
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

interface ProductInCart extends Products {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Products;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  const transformToArray = Object.values(shoppingCart);

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
        {/* Object.entries(shoppingCart).map()  y el resto, tambien podia funcionar       */}
        {transformToArray.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              className="bg-dark text-white"
              style={{ width: "150px" }}
              value={product.count}>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          );
        })}
        {/* <ProductCard
          product={products[0]}
          className="bg-dark text-white"
          style={{ width: "150px" }}
          // onChange={() => onProductCountChange(products[0])}
        >
          <ProductImage className="custom-image" />

          <ProductButtons className="custom-buttons" 
          style={{display:'flex',justifyContent:'center'}}
          />
        </ProductCard> */}
      </div>
    </div>
  );
};
