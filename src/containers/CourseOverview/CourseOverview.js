import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import HomeNavbar from '../../components/Navigation/HomeNavbar/HomeNavbar';
import {
   faStar,
   faStarHalfAlt,
   faPlayCircle,
   faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CourseOverview.css';

const CourseOverview = (props) => {
   const [course, setCourse] = useState({
      id: 2,
      title: 'OTTOMAN CUISINE, TURKISH COOKING CLASS',
      subtitle:
         'A great variety of mouth watering dishes in Turkish cuisine which is mostly the heritage of Ottoman cuisine.',
      teacher_id: 1,
      rating: 2,
      price: 1000,
      languages: 'English',
      audience: 'Who likes enjoying cooking, food and culture',
      picture: 'https://i.udemycdn.com/course/480x270/2702904_7dd8.jpg',
      updated_at: '2020-02-12T03:37:45.087Z',
      rating_count: 3,
      learning_goals:
         'Learn to cook Turkish traditional mezes and dishes in a very simple way\\nEngaging with one of the richest cuisine in history\\nGain the newest kitchen skills\\nA new perspectives on every day food',
      description:
         "\u003cp\u003eTurkish cuisine one of the world's great cuisines. It reflects the long history of this land...\u003c/p\u003e\u003cp\u003eA great variety of mouth watering dishes in Turkish cuisine which is mostly the heritage of Ottoman cuisine. It is the mixture and refinement of Central Asian, Middle Eastern and Balkan cuisines. Therefore it is impossible to fit Turkish cuisine into a short list.\u003c/p\u003e\u003cp\u003eAnatolia is blessed with varied climate which allows the country to get almost everything on its land. Turkey is one of the few countries in the world that has been self sustaining, producing all its own food. Turkish cuisine traditionally is NOT spicy, except in the southeast part of the country, where preparations can reflect a hot Middle Eastern(Arabic) food influence. But now in evertwhere you are able to find restaurants that sell that kind of spicy dishes\u003c/p\u003e\u003cp\u003eTurks have a big diversity of vegetables and of course this reflects on the dishes. One very important detail about vegetable dishes is whether they have meat in them or not.\u003c/p\u003e",
      teacher: 'Darma Academy',
      type_style: 'cooking',
      student_count: 15,
   });

   return (
      <React.Fragment>
         <HomeNavbar />
         <div className="heading-box">
            <div>
               <div className="course-overview-title">{course.title}</div>
               <div className="course-overview-subtitle">{course.subtitle}</div>
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
                  <FontAwesomeIcon style={{ color: '#fff' }} icon={faComment} />
                  {course.languages}
               </div>
            </div>
            <div className="course-feed-img-box">
               <div
                  className="img-play-box"
                  //    onClick={this.videoOpenHandle}
               >
                  <img
                     style={{ maxWidth: '335px' }}
                     src={course.picture}
                  />
                  <div className="play-circle">
                     <FontAwesomeIcon
                        icon={faPlayCircle}
                        className="play-circle-icon"
                     />
                  </div>
               </div>
               <div style={{ textAlign: 'center' }}>${course.price}</div>
               <button
                  className="back-home-button"
                   onClick={() => props.history.replace('/courses/1')}
               >
                  Watch Course
               </button>
            </div>
         </div>
      </React.Fragment>
   );
};

export default withRouter(CourseOverview);
