import React, { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import HomeNavbar from '../../components/Navigation/HomeNavbar/HomeNavbar';
import Spinner from '../../components/UI/Spinner/Spinner';
import {
   faStar,
   faStarHalfAlt,
   faPlayCircle,
   faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CourseOverview.css';

import CourseData from '../../coursedata' 

const CourseOverview = (props) => {
   const { course_id } = useParams();
   const [courses, setCourses] = useState(CourseData)

   const [course, setCourse] = useState(null);

   useEffect(() => {
      setCourse({ ...courses.find((course) => course.id === +course_id) });
   }, [course_id, courses]);

   const onAddToCartHandler = (itemID) => {
      props.onAddToCart(itemID);
   };
   const renderPrice = (price) => {
      let str = price.toString();
      return str.slice(0, str.length - 2) + '.' + str.slice(str.length - 2);
   };
   const renderOverview = () => {
      let overview = <Spinner />;
      if (course) {
         overview = (
            <div className="heading-box">
               <div>
                  <div className="course-overview-title">{course.title}</div>
                  <div className="course-overview-subtitle">
                     {course.subtitle}
                  </div>
                  <div className="index-card-rating-feed">
                     <span className="index-rating-span">
                        <div>
                           <FontAwesomeIcon
                              style={{ padding: '3px', color: '#f4c150' }}
                              icon={faStar}
                           />
                           <FontAwesomeIcon
                              style={{ padding: '3px', color: '#f4c150' }}
                              icon={faStar}
                           />
                           <FontAwesomeIcon
                              style={{ padding: '3px', color: '#f4c150' }}
                              icon={faStar}
                           />
                           <FontAwesomeIcon
                              style={{ padding: '3px', color: '#f4c150' }}
                              icon={faStarHalfAlt}
                           />
                           <FontAwesomeIcon
                              style={{ padding: '3px', color: 'dedfe0' }}
                              icon={faStar}
                           />
                        </div>
                     </span>
                     <span className="index-rating-span">{course.rating}</span>
                     <span className="index-rating-span">
                        ({course.rating_count} ratings)
                     </span>
                     <span className="index-rating-span">
                        {course.student_count} students enrolled
                     </span>
                  </div>
                  <div>
                     <span style={{ paddingRight: '32px', fontSize: '15px' }}>
                        Created by {course.teacher}
                     </span>
                     <FontAwesomeIcon
                        style={{ color: '#fff' }}
                        icon={faComment}
                     />
                     {course.languages}
                  </div>
               </div>
               <div className="course-feed-img-box">
                  <div
                     className="img-play-box"
                     //    onClick={this.videoOpenHandle}
                  >
                     <img style={{ maxWidth: '335px' }} src={course.picture} alt="course-picture"/>
                     <div className="play-circle">
                        <FontAwesomeIcon
                           icon={faPlayCircle}
                           className="play-circle-icon"
                        />
                     </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>${renderPrice(course.price)}</div>
                  <button
                     className="back-home-button"
                     onClick={() => {
                        onAddToCartHandler(course.id);
                     }}
                  >
                     Add To Cart
                  </button>
               </div>
            </div>
         );
      }
      return overview;
   };
   return (
      <React.Fragment>
         <HomeNavbar />
         {renderOverview()}
      </React.Fragment>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onAddToCart: (itemID) => dispatch(actions.addShoppingCartItem(itemID)),
   };
};
export default withRouter(
   connect(mapStateToProps, mapDispatchToProps)(CourseOverview)
);
