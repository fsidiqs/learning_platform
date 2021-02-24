import * as actionTypes from '../actions/actionTypes';

const initialState = {
   items: [],
   loading: false,
};

const cartInit = (state) => {
   const cartItems = JSON.parse(localStorage.getItem('shopping_cart')) || [];
   // const initCartItems = 
   return { ...state, items: cartItems };
};

const addCartItem = (state, itemID) => {
   const updatedItems = [...new Set([...state.items, itemID])];

   localStorage.setItem('shopping_cart', JSON.stringify(updatedItems));
   return { ...state, items: updatedItems };
};

const removeCartItem = (state, itemID) => {
   const updatedItems = state.items.filter((id) => id !== itemID);
   localStorage.setItem('shopping_cart', JSON.stringify(updatedItems));
   return { ...state, items: updatedItems };
};

const reducer = (state = initialState, payload) => {
   switch (payload.type) {
      case actionTypes.SHOPPING_CART_INIT:
         return cartInit(state);
      case actionTypes.ADD_SHOPPING_CART_ITEM:
         return addCartItem(state, payload.itemID);
      case actionTypes.REMOVE_SHOPPING_CART_ITEM:
         return removeCartItem(state, payload.itemID)
      default:
         return state;
   }
};

export default reducer;
