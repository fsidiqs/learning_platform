import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import HomeNavbar from '../../components/Navigation/HomeNavbar/HomeNavbar';
import CartItem from '../../components/CartItem/CartItem';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { renderPrice } from '../../utils/utils';
import CourseData from '../../coursedata';

import './ShoppingCart.css';

const ShoppingCart = (props) => {
   const [courses, setCourses] = useState(CourseData);

   const [cartItems, setCartItems] = useState([]);

   const { onRemoveCartItem, onShoppingCartInit, shoppingCart } = props;

   useEffect(() => {
      onShoppingCartInit();
   }, [onShoppingCartInit]);

   useEffect(() => {
      const updatedCartItems = shoppingCart.map((cartItem) =>
         courses.find((course) => course.id === cartItem)
      );

      setCartItems(updatedCartItems);
   }, [shoppingCart, courses]);

   const onCourseClickHandler = (id) => {
      props.history.push(`/course-overview/${id}`);
   };
   const cartItemsCmp = cartItems.map((course) => (
      <CartItem
         course={course}
         clicked={onCourseClickHandler}
         key={course.id}
         removed={onRemoveCartItem}
      />
   ));

   const renderContent = () => {
      let content = <Spinner />;
      if (cartItems.length > 0) {
         content = (
            <div className="index">
               <div className="index-header-container">
                  <div className="index-header">Cart Items</div>
               </div>
               <div className="courses-box">{cartItemsCmp}</div>
            </div>
         );
      }
      return content;
   };

   const totalPrice = cartItems.reduce((acc, obj) => {
      return acc + obj.price;
   }, 0);

   const checkoutComp =
      cartItems.length > 0 ? (
         <div className="checkout-form">
            <div className="index-header-container">
               <div className="index-header">Checkout</div>
            </div>
            <Card variant="outlined">
               <CardContent>
                  <h2 color="textSecondary" gutterBottom>
                     Total Price
                  </h2>
                  <h3>${renderPrice(totalPrice)}</h3>
               </CardContent>
               <CardActions>
                  {props.isAuthenticated ? (
                     <Button
                        variant="contained"
                        size="small"
                        onClick={onCheckoutHandler}
                     >
                        Checkout Now
                     </Button>
                  ) : (
                     <Button variant="contained" size="small">
                        <Link to="/auth">Login to Checkout</Link>
                     </Button>
                  )}
               </CardActions>
            </Card>
         </div>
      ) : null;

   return (
      <div>
         <HomeNavbar />
         {renderContent()}
         {checkoutComp}
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null,
      shoppingCart: state.shoppingCart.items,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onShoppingCartInit: () => dispatch(actions.shoppingCartInit()),
      onRemoveCartItem: (itemID) =>
         dispatch(actions.removeShoppingCartItem(itemID)),
      onAddPurchasedCourse: (itemIDArr) =>
         dispatch(actions.addPurchasedCourse(itemIDArr)),
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(ShoppingCart));
