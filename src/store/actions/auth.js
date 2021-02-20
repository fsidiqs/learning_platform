import * as actionTypes from './actionTypes';
// import axios from 'axios';
export const authStart = () => {
   return {
      type: actionTypes.AUTH_START,
   };
};

export const authSuccess = (token, userId) => {
   return {
      type: actionTypes.AUTH_SUCCESS,
      idToken: token,
      userId: userId,
   };
};

export const authFail = (error) => {
   return {
      type: actionTypes.AUTH_FAIL,
      error: error,
   };
};

export const logout = () => {
   localStorage.removeItem('token');
   localStorage.removeItem('expirationDate');
   localStorage.removeItem('userId');

   return {
      type: actionTypes.AUTH_LOGOUT,
   };
};

export const checkAuthTimeout = (expirationTime) => {
   return (dispatch) => {
      console.log(expirationTime, 'test')
      setTimeout(() => {
         dispatch(logout());
      }, expirationTime * 1000);
   };
};

export const auth = (email, password, isSignup) => {
   return async (dispatch) => {
      dispatch(authStart());
      const authData = {
         email: email,
         password: password,
         returnSecureToken: true,
      };
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      // add a day
      const signupResp = {
         data: {
            idToken: 'test',
            expiresIn: tomorrow,
            localId: 'testid',
         },
      };

      try {
         // const signInUrl =
         //    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhVc-YQOQbnyktEzLHCm7UDQ2xaLObB30';
         // const signUpUrl =
         //    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhVc-YQOQbnyktEzLHCm7UDQ2xaLObB30';

         // signupResp = await axios({
         //    url: isSignup ? signUpUrl : signInUrl,
         //    method: 'POST',
         //    data: authData,
         // });
         // const expirationDate = new Date(
         //    new Date().getTime() + signupResp.data.expiresIn * 1000
         // );
         localStorage.setItem('token', signupResp.data.idToken);
         localStorage.setItem('expirationDate', signupResp.data.expiresIn);
         localStorage.setItem('userId', signupResp.data.localId);
         console.log(signupResp.data.expiresIn);
         dispatch(
            authSuccess(signupResp.data.idToken, signupResp.data.localId)
         );

         // dispatch(checkAuthTimeout(signupResp.data.expiresIn));
      } catch (err) {
         dispatch(authFail(err.response.data.error));
      }
   };
};

export const setAuthRedirectPath = (path) => {
   return {
      type: actionTypes.SET_AUTH_REDIRECT_PATH,
      path: path,
   };
};

export const authCheckState = () => {
   return (dispatch) => {
      const token = localStorage.getItem('token');
      if (!token) {
         dispatch(logout());
      } else {
         const expirationDate = new Date(
            localStorage.getItem('expirationDate')
         );
         if (expirationDate <= new Date()) {
            dispatch(logout());
         } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
            dispatch(
               checkAuthTimeout(
                  (expirationDate.getTime() - new Date().getTime()) / 1000
               )
            );
         }
      }
   };
};
