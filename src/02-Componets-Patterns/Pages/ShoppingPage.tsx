import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../Components";

import "../Styles/custom-styles.css";
import { products } from "../data/data";
import { useShoppingCart } from "../Hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
            value={shoppingCart[product.id]?.count || 0}
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
              onChange={(e) => onProductCountChange(e)}
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
