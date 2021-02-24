import Button from '@material-ui/core/Button';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CartItem.css';

const CartItem = (props) => {
   const rating = (
      <div>
         <FontAwesomeIcon style={{ color: '#f4c150' }} icon={faStar} />
         <FontAwesomeIcon style={{ color: '#f4c150' }} icon={faStar} />
         <FontAwesomeIcon style={{ color: '#f4c150' }} icon={faStarHalfAlt} />
         <FontAwesomeIcon style={{ color: 'dedfe0' }} icon={faStar} />
         <FontAwesomeIcon style={{ color: 'dedfe0' }} icon={faStar} />
      </div>
   );

   const renderPrice = () => {
      let str = '200';
      return str.slice(0, str.length - 2) + '.' + str.slice(str.length - 2);
   };

   return (
      <div className="course-card">
         <div onClick={() => props.clicked(props.course.id)}>
            <div>
               <img style={{ width: '100%' }} src={props.course.picture} />
            </div>
            <div className="index-card-text">
               <div className="index-card-title">{props.course.title}</div>
               <div className="index-card-rating">
                  <span className="index-rating-span">{rating}</span>
                  <span className="index-rating-span">
                     {props.course.rating}
                  </span>
                  <span
                     className="index-rating-span"
                     style={{ color: '#686f7a' }}
                  >
                     ({props.course.rating_count})
                  </span>
               </div>
               <div className="index-card-price">${renderPrice()}</div>
            </div>
         </div>
         <Button
            variant="contained"
            color="secondary"
            onClick={() => props.removed(props.course.id)}
         >
            remove item
         </Button>
      </div>
   );
};

export default CartItem;
