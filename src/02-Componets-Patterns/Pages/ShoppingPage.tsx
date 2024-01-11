import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../Components/ProductCard";

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
        <ProductCard.Title title="Caffe" />
        <ProductCard.Buttons
          count={0}
          handleCount={function (value: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      </ProductCard>

      {/* <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title="Caffe" />
        <ProductButtons
          count={0}
          handleCount={function (value: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      </ProductCard> */}
    </div>
  );
};
