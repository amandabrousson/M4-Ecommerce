export interface IProduct {
  id: number;
  name: string;
  price: number;
  description?: string;
  image: string;
  stock?: number;
  categoryId?: number;
  quantity?: number;
}

export interface IUser {
  id: number,
  name: string,
  email: string,
  password: string,
  address: string,
  phone: string
}

export interface IUserShort {
  id: number,
  name: string,
  email: string,
  address: string,
  phone: string
}

export interface IProductRes {
  id: number,
  name: string,
  price: number
}

export interface Order {
  id: number;
  status: string;
  date: string;
  userId: number;
  products: number[];
}
