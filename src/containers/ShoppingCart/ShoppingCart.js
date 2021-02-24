import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeNavbar from '../../components/Navigation/HomeNavbar/HomeNavbar';
import CartItem from '../../components/CartItem/CartItem';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

const ShoppingCart = (props) => {
   const [courses, setCourses] = useState([
      {
         id: 1,
         title: 'Computer Science 101: Master the Theory Behind Programming',
         subtitle:
            'Computer Science 101: Learn Computer Science to become a better Programmer and Software Engineer.',
         teacher_id: 1,
         rating: 4,
         price: 999,
         languages: 'English',
         audience:
            'Anyone who wants to become a Good Programmer\\nAnyone interested in the Computer Science Discipline\\nAnyone who wants to learn how to problem solve like a Computer Scientist',
         picture: 'https://i.udemycdn.com/course/240x135/1395136_3f8a_3.jpg',
         updated_at: '2020-02-12T03:37:45.014Z',
         rating_count: 10,
         learning_goals:
            'Understand the Fundamental Theories of Algorithm Analysis\\nBe able to Compare Various Algorithms\\nUnderstand When to use Different Data Structures and Algorithms\\nUnderstand the Fundamentals of Computer Science theory\\nUnderstand the Core Sorting Algorithms',
         description:
            '\u003cp\u003e\u003cstrong\u003eMaster the Theory to Becoming a Good Programmer!\u0026nbsp;\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eIf youre looking to learn the theory that makes great programmers,\u0026nbsp;youve come to the right place!\u0026nbsp;This course is perfect for anyone interested in learning the fundamentals to Computer Science Theory.\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eNo Previous Experience Necessary!\u0026nbsp;\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eComputer science and technology are often thought of as things only for "analytical minds". I believe however that technology and its theory are for everyone. So I designed this\u0026nbsp;course to\u0026nbsp;teach each topic in a variety of\u0026nbsp;\u003cstrong\u003eeasy to digest\u003c/strong\u003e ways. Through these multiple reinforcing steps, I believe anyone can follow along and succeed!\u0026nbsp;\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eWhy is the Theory of Programming Important?\u0026nbsp;\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eUnderstanding\u0026nbsp;Computer Science theory is what sets apart\u0026nbsp;\u003cstrong\u003eGreat programmers\u0026nbsp;\u003c/strong\u003efrom average ones. Programming theory is something that transcends a single programming language. It gives you skills and techniques you can apply to any programming language you touch. Learning the theory behind programming is just as important, if not more important than learning a singular programming language like Java or C++.\u003c/p\u003e\u003cp\u003eProgramming is all about problem solving. Analyzing a problem, and being able to figure out a way that a computer can help with that problem. Computer Science is the practice of this analysis process. It goes over the techniques and knowledge necessary to design efficient and sustainable code.\u0026nbsp;\u003c/p\u003e\u003cp\u003eSo if you want to begin setting yourself apart from the average programmers, this is the course for you!\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eEnroll Now and youll Learn:\u0026nbsp;\u003c/strong\u003e\u003cbr\u003e\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003eBinary Number System\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eN Notation\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eBig O Notation\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eHow to Analyze a Program\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eArrays and\u0026nbsp;their Advantages\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eNodes and their Importance\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eLinked\u0026nbsp;Lists and their Advantages and Implementations\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eStacks implemented with Arrays and Linked\u0026nbsp;Lists\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eQueues Implemented with Arrays and Linked Lists\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eVarious Sorting Algorithms and Their Comparisions\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eTrees and Binary Search Trees\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eAnd Much Much More!\u0026nbsp;\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cstrong\u003eMy\u0026nbsp;Guarantee\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eI am so confident you will enjoy this course, I offer a 100%\u0026nbsp;30-day money-back guarantee through Udemy.\u0026nbsp;If you are not happy with your purchase, I have no problem with giving your money back!\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eAre You Ready to Get Started?\u0026nbsp;\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eI will be waiting for you inside the course!\u0026nbsp;\u003c/p\u003e\u003cp\u003eRemember, this is an online course, so you can take it at your own pace.\u0026nbsp;\u003cem\u003eAre you busy right now?\u0026nbsp;\u003c/em\u003eThats okay. Enroll today, and take the course at your own pace.\u003c/p\u003e\u003cp\u003eThanks so much for your interest in this Computer Science 101 Course!\u0026nbsp;\u003c/p\u003e\u003cp\u003eSee you inside!\u003c/p\u003e\u003cp\u003eKurt\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
         teacher: 'Kurt Anderson',
         type_style: 'computer',
      },
      {
         id: 2,
         title: 'OTTOMAN CUISINE, TURKISH COOKING CLASS',
         subtitle:
            'A great variety of mouth watering dishes in Turkish cuisine which is mostly the heritage of Ottoman cuisine.',
         teacher_id: 1,
         rating: 2,
         price: 1000,
         languages: 'English',
         audience: 'Who likes enjoying cooking, food and culture',
         picture: 'https://i.udemycdn.com/course/480x270/2702904_7dd8.jpg',
         updated_at: '2020-02-12T03:37:45.087Z',
         rating_count: 3,
         learning_goals:
            'Learn to cook Turkish traditional mezes and dishes in a very simple way\\nEngaging with one of the richest cuisine in history\\nGain the newest kitchen skills\\nA new perspectives on every day food',
         description:
            "\u003cp\u003eTurkish cuisine one of the world's great cuisines. It reflects the long history of this land...\u003c/p\u003e\u003cp\u003eA great variety of mouth watering dishes in Turkish cuisine which is mostly the heritage of Ottoman cuisine. It is the mixture and refinement of Central Asian, Middle Eastern and Balkan cuisines. Therefore it is impossible to fit Turkish cuisine into a short list.\u003c/p\u003e\u003cp\u003eAnatolia is blessed with varied climate which allows the country to get almost everything on its land. Turkey is one of the few countries in the world that has been self sustaining, producing all its own food. Turkish cuisine traditionally is NOT spicy, except in the southeast part of the country, where preparations can reflect a hot Middle Eastern(Arabic) food influence. But now in evertwhere you are able to find restaurants that sell that kind of spicy dishes\u003c/p\u003e\u003cp\u003eTurks have a big diversity of vegetables and of course this reflects on the dishes. One very important detail about vegetable dishes is whether they have meat in them or not.\u003c/p\u003e",
         teacher: 'Darma Academy',
         type_style: 'cooking',
      },
   ]);

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
      <CartItem course={course} clicked={onCourseClickHandler} key={course.id} removed={onRemoveCartItem}/>
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

   return (
      <div>
         <HomeNavbar />
         {renderContent()}
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
      onRemoveCartItem: (itemID) => dispatch(actions.removeShoppingCartItem(itemID)),
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(ShoppingCart));
