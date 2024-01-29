import { Props } from "../Components/ProductCard";
import { Props as ProductTitleProps } from "../Components/ProductTitle";
import { Props as ProductImageProps } from "../Components/ProductImage";
import { Props as ProductButtonsProps } from "../Components/ProductButtons";

export interface Products {
  id: number;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  count: number;
  handleCount: (value: number) => void;
  product: Products;
}

export interface ProductCardHOCProps {
  ({ children, product }: Props): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
