import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './Course.css';

const Course = (props) => {
   return (
      <Card onClick={props.clicked}>
         <div className="thumbnail" >
            <img
               className="thumbnail-image"
               src="http://unsplash.it/250/150?gravity=center"
               alt="course-thumbnail"
            />
         </div>
         <CardContent>
            <div className="course-bottom-section">
               {/* <a href="#">
             <img className="channel"
            </a> */}
               <div className="course-details">
                  <span className="course-title">Course Title</span>
                  {/* <a href="#" className="course-channel-name">Channel  Name</a> */}
                  <div className="course-metadata">
                     <span>12:00</span>
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
};

export default withRouter(Course);
