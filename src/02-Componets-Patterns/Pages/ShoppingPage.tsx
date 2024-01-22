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
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title="vergamotas" />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product} className="bg-dark">
        <ProductImage className="custom-image"/>
        <ProductTitle className="text-white"/>
        <ProductButtons />
      </ProductCard>
    </div>
  );
};
