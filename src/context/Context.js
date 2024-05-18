import React, { Children, createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "iPhone 9",
      price: "549",
      image: "https://i.pinimg.com/564x/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg",
      inStock: 94,
      fastDelivery: false,
      rating: 4,
    },
    {
      id: 2,
      name: "iPhone X",
      price: "899",
      image: "https://i.pinimg.com/564x/b2/10/73/b210738bdf59ff2b1bdbf845b0b4816e.jpg",
      inStock: 34,
      fastDelivery: true,
      rating: 4,
    },
    {
      id: 3,
      name: "Samsung S 24",
      price: "1249",
      image: "https://i.pinimg.com/736x/2b/3b/f9/2b3bf9a14a934406f3c70d27465b5789.jpg",
      fastDelivery: true,
      stock: 36,
      rating: 4,
    },
    {
      id: 4,
      name: "OPPO Find X7",
      price: "280",
      image: "https://i.pinimg.com/736x/f9/0c/15/f90c15770849b8ef3de5c3476c5a8d80.jpg",
      fastDelivery: true,
      stock: 123,
      rating: 2,
    },
    {
      id: 5,
      name: "Huawei P30",
      price: "499",
      image: "https://i.pinimg.com/564x/e5/d7/e8/e5d7e863f42b20228852b357162cd2d0.jpg",
      fastDelivery: true,
      stock: 32,
      rating: 3,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
  {children}
</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;