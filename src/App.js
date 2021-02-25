import React, { useEffect } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CourseContent from './containers/CourseContent/CourseContent';
import CourseOverview from './containers/CourseOverview/CourseOverview';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Home from './containers/Home/Home';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import PurchasedCourse from './containers/PurchasedCourse/PurhcasedCourse';

import * as actions from './store/actions/index';

const App = (props) => {
   const { onTryAutoSignup } = props;

   useEffect(() => {
      onTryAutoSignup();
   }, [onTryAutoSignup]);

   return (
      <div>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={ShoppingCart} />
            <Route
               path="/course-overview/:course_id"
               component={CourseOverview}
            />
            <Route path="/purchased-courses/" component={PurchasedCourse} />
            <Route path="/courses/:course_id" component={CourseContent} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
         </Switch>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onTryAutoSignup: () => dispatch(actions.authCheckState()),
   };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
