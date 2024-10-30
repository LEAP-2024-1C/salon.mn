export type IMenu = {
  menuId: string;
  label: string;
  link: string;
}[];

export type IProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: [string];
  discount: number;
  category: string;
};
