import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
   let attachedClasses = [classes.SideDrawer, classes.Close];
   if (props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
   }
   return (
      <React.Fragment>
         <div className={attachedClasses.join(' ')}>
            <nav>
               <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
         </div>
      </React.Fragment>
   );
};

export default sideDrawer;
