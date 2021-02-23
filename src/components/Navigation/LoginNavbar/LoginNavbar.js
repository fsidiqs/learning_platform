import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import './LoginNavbar.css';

const HomeNavbar = (props) => {
   return (
      <AppBar position="static" color="default" className="navbar">
         <div className="flex-container">
            <IconButton color="inherit" aria-label="menu">
               <NavLink to="/">
                  <HomeIcon />
               </NavLink>
            </IconButton>
           
         </div>
      </AppBar>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
   };
};

export default connect(mapStateToProps)(HomeNavbar);
