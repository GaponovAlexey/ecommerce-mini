export interface IProduct {
  id: number,
  name: string,
  imagePath: string,
  price: number,
}

export interface ICartItem extends IProduct {
  count?: any,
}