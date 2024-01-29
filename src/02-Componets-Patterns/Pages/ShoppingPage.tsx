import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../Components";

import "../Styles/custom-styles.css";

const product = {
  id: 1,
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard product={product} className="bg-dark text-white">
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title className="text-white" />
        <ProductCard.Buttons className="custom-buttons"  />
      </ProductCard>

      <ProductCard product={product} className="bg-dark text-white">
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
