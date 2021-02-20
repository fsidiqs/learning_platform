import './CourseList.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Course from '../../components/Course/Course';

const CourseList = (props) => {
   const onCourseClickHandler = () => {
      if (props.isAuthenticated) {
         props.history.push('/courses/1');
      } else if (!props.isAuthenticated) {
         console.log(props.isAuthenticated);
         props.history.push('/auth');
      }
   };
   return (
      <div className="course-section">
         <Course
            isAuth={props.isAuthenticated}
            clicked={onCourseClickHandler}
         />
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
   };
};

export default connect(mapStateToProps)(withRouter(CourseList));
