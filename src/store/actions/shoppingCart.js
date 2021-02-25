import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setCart = (cart) => {
   return {
      type: actionTypes.SET_SHOPPING_CART,
      cart,
   };
};

export const addShoppingCartItem = (itemID) => {
   return {
      type: actionTypes.ADD_SHOPPING_CART_ITEM,
      itemID,
   };
};

export const removeShoppingCartItem = (itemID) => {
   return {
      type: actionTypes.REMOVE_SHOPPING_CART_ITEM,
      itemID,
   };
};

export const clearShoppingCart = () => {
   return {
      type: actionTypes.CLEAR_SHOPPING_CART_ITEM,
   };
};

export const shoppingCartInit = () => {
   return {
      type: actionTypes.SHOPPING_CART_INIT,
   };
};
