import { ReactElement } from "react";

export interface ProductCardProps {
  product: Products;
  children?: ReactElement | ReactElement[];
}

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
