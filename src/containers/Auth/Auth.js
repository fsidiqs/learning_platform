import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Auth.module.css';

import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import LoginNavbar from '../../components/Navigation/LoginNavbar/LoginNavbar';

const Auth = (props) => {
   const [controls, setControls] = useState({
      email: {
         elementType: 'input',
         elementConfig: {
            type: 'email',
            placeholder: 'Mail Address',
         },
         value: '',
         validation: {
            required: true,
            isEmail: true,
         },
         valid: false,
         touched: false,
      },
      password: {
         elementType: 'input',
         elementConfig: {
            type: 'password',
            placeholder: 'Password',
         },
         value: '',
         validation: {
            required: true,
            minLength: 6,
         },
         valid: false,
         touched: false,
      },
   });
   const [isSignup, setIsSignup] = useState(false);
   const { isAuthenticated, authRedirectPath } = props;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push(authRedirectPath);
      }
   }, [isAuthenticated, authRedirectPath]);

   useEffect(() => {
      if (isAuthenticated) {
         console.log('test');

         props.history.push(authRedirectPath);
      }
   }, [isAuthenticated, authRedirectPath]);

   const checkValidity = (value, rules) => {
      let isValid = true;
      if (!rules) {
         return true;
      }

      if (rules.required) {
         isValid = value.trim() !== '' && isValid;
      }

      if (rules.minLength) {
         isValid = value.length >= rules.minLength && isValid;
      }

      if (rules.maxLength) {
         isValid = value.length <= rules.maxLength && isValid;
      }

      if (rules.isEmail) {
         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
         isValid = pattern.test(value) && isValid;
      }

      if (rules.isNumeric) {
         const pattern = /^\d+$/;
         isValid = pattern.test(value) && isValid;
      }

      return isValid;
   };

   const inputChangedHandler = (event, controlName) => {
      const updatedControls = {
         ...controls,
         [controlName]: {
            ...controls[controlName],
            value: event.target.value,
            valid: checkValidity(
               event.target.value,
               controls[controlName].validation
            ),
            touched: true,
         },
      };
      setControls(updatedControls);
   };

   const submitHandler = (event) => {
      event.preventDefault();
      props.onAuth(controls.email.value, controls.password.value, isSignup);
   };

   const switchAuthModeHandler = () => {
      this.setState((prevState) => {
         return {
            isSignup: !prevState.isSignup,
         };
      });
   };

   const renderForm = () => {
      const formElementsArray = [];
      for (let key in controls) {
         formElementsArray.push({
            id: key,
            config: controls[key],
         });
      }

      let form = formElementsArray.map((formElement) => (
         <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
         />
      ));

      if (props.loading) {
         form = <Spinner />;
      }
      return form;
   };

   const errorMessage = props.error ? <p>{props.error.message}</p> : null;

   return (
      <React.Fragment>
         <LoginNavbar />
         <div className={classes.Auth}>
            {errorMessage}
            <form onSubmit={submitHandler}>
               {renderForm()}
               <button btnType="Success">SUBMIT</button>
            </form>
            <button onClick={switchAuthModeHandler} btnType="Danger">
               SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}
            </button>
         </div>
      </React.Fragment>
   );
};

const mapStateToProps = (state) => {
   return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
      authRedirectPath: state.auth.authRedirectPath,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onAuth: (email, password, isSignup) =>
         dispatch(actions.auth(email, password, isSignup)),
      onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
