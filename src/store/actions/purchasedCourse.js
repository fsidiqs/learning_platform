import * as actionTypes from './actionTypes';

export const addPurchasedCourse = (itemIDArr) => {
   return {
      type: actionTypes.ADD_PURCHASED_COURSE,
      itemIDArr
   }
}

export const clearPurchasedCourse = () => {
   return {
      type: actionTypes.REMOVE_SHOPPING_CART_ITEM,
   };
};

export const purchasedCourseInit = () => {
   return {
      type: actionTypes.PURCHASED_COURSE_INIT,
   };
};
