import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeNavbar from '../../components/Navigation/HomeNavbar/HomeNavbar';
import WatchCourseCard from '../../components/Course/WatchCourseCard/WatchCourseCard';
import * as actions from '../../store/actions/index';

import CourseData from '../../coursedata';

import './PurchasedCourse.css';

const PurchasedCourse = (props) => {
   const {
      onShoppingCartInit,
      shoppingCart,
      onPurchasedCourseInit,
      purchasedCourseIDArr,
   } = props;

   const [courses, setCourses] = useState(CourseData);

   const [cartItems, setCartItems] = useState([]);
   const [purchasedCourses, setPurchasedCourses] = useState([]);

   useEffect(() => {
      onShoppingCartInit();
      onPurchasedCourseInit();
   }, [onShoppingCartInit, onPurchasedCourseInit]);

   useEffect(() => {
      const updatedCartItems = shoppingCart.map((cartItem) =>
         courses.find((course) => course.id === cartItem)
      );
      const updatedPurchasedCourse = purchasedCourseIDArr.map((courseID) =>
         courses.find((course) => course.id === courseID)
      );

      setPurchasedCourses(updatedPurchasedCourse);
      setCartItems(updatedCartItems);
   }, [setPurchasedCourses, shoppingCart, courses, purchasedCourseIDArr]);

   const onCourseClickHandler = (id) => {
      props.history.push(`/courses/${id}`);
   };
   const courseItemCmp = purchasedCourses.map((course) => (
      <WatchCourseCard
         course={course}
         clicked={onCourseClickHandler}
         key={course.id}
         removed={() => {}}
      />
   ));

   const renderContent = () => {
      let content = <p>no puchased item</p>;
      if (purchasedCourses.length > 0) {
         content = (
            <div className="index">
               <div className="index-header-container">
                  <div className="index-header">Cart Items</div>
               </div>
               <div className="courses-box">{courseItemCmp}</div>
            </div>
         );
      }
      return content;
   };

   return (
      <div>
         <HomeNavbar />
         {renderContent()}
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
      shoppingCart: state.shoppingCart.items,
      purchasedCourseIDArr: state.purchasedCourse.items,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onShoppingCartInit: () => dispatch(actions.shoppingCartInit()),
      onPurchasedCourseInit: () => dispatch(actions.purchasedCourseInit()),
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(PurchasedCourse));
