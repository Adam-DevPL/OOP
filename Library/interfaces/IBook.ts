export interface IBook {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
}

export interface IBookStocks extends IBook {
  available: number;
  stock: number;
}