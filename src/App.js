import React from 'react';

import { Route, Switch } from 'react-router-dom';
import CourseContent from './containers/CourseContent/CourseContent';
import CourseOverview from './containers/CourseOverview/CourseOverview';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

import Home from './containers/Home/Home';

function App() {
   return (
      <div>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route
               path="/course-overview/:course_id"
               component={CourseOverview}
            />
            <Route path="/courses/:course_id" component={CourseContent} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
         </Switch>
      </div>
   );
}

export default App;
