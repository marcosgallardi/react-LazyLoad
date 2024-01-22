import { Props } from "../Components/ProductCard";

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
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
