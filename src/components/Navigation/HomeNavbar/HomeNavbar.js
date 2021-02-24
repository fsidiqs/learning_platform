import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge'

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './HomeNavbar.css';

const HomeNavbar = (props) => {
   return (
      <AppBar position="static" color="default" className="navbar">
         <div className="flex-container">
            <IconButton color="inherit" aria-label="menu">
               <NavLink to="/">
                  <HomeIcon />
               </NavLink>
            </IconButton>
            <div className="search">
               <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="search course"
                  size="small"
               />
               <SearchIcon className="search-icon" />
            </div>
            <div className="nav-items">
               {props.isAuthenticated ? (
                  <React.Fragment>
                     <IconButton>
                        <NavLink to="/cart">
                           <Badge badgeContent={props.shoppingCart.length} color="primary">
                              <ShoppingCartIcon className="shopping-cart-icon" />
                           </Badge>
                        </NavLink>
                     </IconButton>
                     <NavLink to="/logout">
                        <Button color="inherit">logout</Button>
                     </NavLink>
                  </React.Fragment>
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

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
      shoppingCart: state.shoppingCart.items,
   };
};

export default connect(mapStateToProps)(HomeNavbar);
