import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import HomeNavbar from '../../components/Navigation/HomeNavbar/HomeNavbar';
import Course from '../../components/Course/Course';
import './Home.css';

import CourseData from '../../coursedata'

const Home = (props) => {
   const { onShoppingCartInit } = props;
   const [courses, setCourses] = useState(CourseData);
   const onCourseClickHandler = (id) => {
      props.history.push(`/course-overview/${id}`);
   };

   useEffect(() => {
      onShoppingCartInit();
   }, [onShoppingCartInit]);

   const courseComps = courses.map(course => <Course course={course} clicked={onCourseClickHandler}/>)

   return (
      <div>
         <HomeNavbar />
         <div className="index">
            <div className="index-header-container">
               <div className="index-header">Best Seller</div>
            </div>
            <div className="courses-box">
            <Course course={courses[0]} clicked={onCourseClickHandler} />
               <Course course={courses[1]} clicked={onCourseClickHandler} />
               <Course course={courses[2]} clicked={onCourseClickHandler} />
               <Course course={courses[3]} clicked={onCourseClickHandler} />
            </div>
            <div className="index-header-container">
               <div className="index-header">Students Are Viewing</div>
            </div>
            <div className="courses-box">
               <Course course={courses[4]} clicked={onCourseClickHandler} />
               <Course course={courses[5]} clicked={onCourseClickHandler} />
               <Course course={courses[7]} clicked={onCourseClickHandler} />
               <Course course={courses[8]} clicked={onCourseClickHandler} />
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
      shoppingCart: state.shoppingCart.items,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onShoppingCartInit: () => dispatch(actions.shoppingCartInit()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
