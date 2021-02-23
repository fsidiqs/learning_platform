import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import './HomeNavbar.css';

const HomeNavbar = (props) => {
   return (
      <AppBar position="static" color="default" className="navbar">
         <div className="flex-container">
            <IconButton color="inherit" aria-label="menu">
               <MenuIcon/>
            </IconButton>
            <div className="search">
               <Input color="primary" fullWidth placeholder="search course" />
               <SearchIcon />
            </div>
            <div className="nav-items">
               {props.isAuthenticated ? (
                  <NavLink to="/logout">
                     <Button color="inherit">logout</Button>
                  </NavLink>
               ) : (
                  <NavLink to="/auth">
                     <Button color="inherit">auth</Button>
                  </NavLink>
               )}
            </div>
         </div>
      </AppBar>
   );
};

export default HomeNavbar;
