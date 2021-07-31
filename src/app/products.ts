export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: '苹果手机',
    price: 799,
    description: '苹果制作的手机！'
  },
  {
    id: 2,
    name: '小米手机',
    price: 699,
    description: '小米制造的手机'
  },
  {
    id: 3,
    name: '华为手机',
    price: 800,
    description: ''
  }
];
