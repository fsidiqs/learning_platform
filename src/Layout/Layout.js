import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
   const [showSideDrawer, setShowSideDrawer] = useState(false);

   const sideDrawerToggleHandler = () => {
      setShowSideDrawer(!showSideDrawer);
   };

   return (
      <React.Fragment>
         <Toolbar
            isAuth={props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggleHandler}
         />
         <main className={classes.Content}>{props.children}</main>
      </React.Fragment>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
   };
};

export default connect(mapStateToProps)(Layout);
