import React from 'react';

import { Route, Switch } from 'react-router-dom';
import CourseContent from './containers/CourseContent/CourseContent';
import CourseList from './containers/CourseList/CourseList';
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import Layout from './Layout/Layout';

function App() {
   return (
      <div>
         <Layout>
            <Switch>
               <Route path="/" exact component={CourseList} />
               <Route path="/courses/:course_id" component={CourseContent} />
               <Route path="/auth" component={Auth} />
               <Route path="/logout" component={Logout} />

            </Switch>
         </Layout>
      </div>
   );
}

export default App;
