import * as actionTypes from '../actions/actionTypes';

const initialState = {
   items: [],
   loading: false,
};

const purchasedCourseInit = (state) => {
   const purchasedItems =
      JSON.parse(localStorage.getItem('purchased_course')) || [];
   return { ...state, items: purchasedItems };
};

const addPurchasedCourse = (state, itemIDArr) => {
   const updatedItems = [...new Set([...state.items, ...itemIDArr])];

   localStorage.setItem('purchased_course', JSON.stringify(updatedItems));
   return { ...state, items: updatedItems };
};

const clearPurchasedCoruse = (state) => {
   localStorage.removeItem('purchased_course');
   return { ...state, items: [] };
};

const reducer = (state = initialState, payload) => {
   switch (payload.type) {
      case actionTypes.PURCHASED_COURSE_INIT:
         return purchasedCourseInit(state);
      case actionTypes.ADD_PURCHASED_COURSE:
         return addPurchasedCourse(state, payload.itemIDArr);
      case actionTypes.CLEAR_PURCHASED_COURSE:
         return clearPurchasedCoruse(state);
      default:
         return state;
   }
};

export default reducer;
