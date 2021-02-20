import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './CourseContent.css';

import Description from '../../components/CourseContent/Description/Description';
import Sidebar from '../../components/CourseContent/Description/Sidebar/Sidebar';
import ReactPlayer from 'react-player';

const CourseContent = (props) => {
   const { course_id } = useParams();
   useEffect(() => {
      console.log(course_id);
   }, []);

   const [showSidebar, setShowSidebar] = React.useState(true);

   const [courseLectures, setCourseLectures] = React.useState([
      {
         url: 'https://www.youtube.com/watch?v=1oETmA6AJQk',
         title: 'Hydroponics at Home',
         descriptions: `What happens when you mix part science experiment, part Pinterest DIY project, and part home gardening venture?  The answer: our next story!  This week, TWILA's Karl Wiggers channels his inner Chip Gaines and Bill Nye to show us how we all can grow our own hydroponic garden at home! 

         For more information, visit: https://www.twilatv.org/blog/11/21/20...​
         
         To see the update from Karl, check out this video -- https://youtu.be/X5hSK8SR-io​
         
         Want to see more videos about Louisiana farmers and the food they grow?
         Subscribe to our channel here: https://www.youtube.com/channel/UCg1d...​  
         
         http://www.twilatv.org​
         https://www.facebook.com/TWILATV/`,
         duration: '12 min',
      },
      {
         url: 'https://www.youtube.com/watch?v=nX4kq4QfYRA',
         title: 'I Grew and Foraged 100% of My Food for an Entire Year!',
         descriptions: `
         For one year I grew and foraged 100% of my food.
         Every. Single. Bite.
         No grocery stores, no restaurants, not even a drink at a bar.
         Nature has been my garden, my pantry and my pharmacy.
         
         I lived in the city of Orlando, Florida in a 100 square foot tiny house.
         With no land of my own I turned front yards into gardens and shared the bounty of food with the homeowners. 
         Over the year I grew over 100 different foods in my gardens, foraged over 200 foods from nature and I even grew and foraged my own medicine and vitamins too.
         
         This project wasn’t just about growing and foraging all of my food though. It was about empowering others to take back power from Big Ag. I built gardens 15 Gardens for the People, planted over 200 Community Fruit Trees, sent out over 5,000 seed packs to help people grow their own organic, healthy food and I taught free gardening classes to the people in my community. 
         
         I’ve been exploring food for nearly a decade and I believe the globalized, industrialized food system is broken . This was a personal quest to see whether I could step away from Big Ag and grow and forage every bite of my own food.
         Here I am, one year later. I did it and I feel healthier and happier today than when I started.
         I'm here to share solutions for a more sustainable and just food system with you.
         
         Food Freedom, the book, will be released December 2020. 100% of my proceeds will be donated to nonprofits working to create a more sustainable and just food system. Learn more and preorder for 20% off: http://robgreenfield.org/foodfreedomb...​
         
         Learn more about the project: http://robgreenfield.org/foodfreedom/​
         
         The guidelines behind this project: http://robgreenfield.org/foodfreedomr...​
         
         The purpose of this project: http://robgreenfield.org/foodfreedomwhy/​
         
         List of all 300 foods that I ate: http://robgreenfield.org/foodfreedomf...​
         
         Log of what I ate each day: http://robgreenfield.org/foodfreedomm...​
         
         Photos of my meals and foods: http://robgreenfield.org/foodfreedomp...​
         
         Video filmed and edited by John VonMutius http://johnvonmutius.com​
         
         Rob Greenfield’s work is Creative Commons and this content is free to be republished and redistributed, following the terms of the creative commons Attribution-NonCommercial 4.0 license. Learn about Creative Commons and see the guidelines here: http://www.creativecommons.org/licens...​
         
         — 
         Rob Greenfield is an activist and humanitarian dedicated to leading the way to a more sustainable and just world. He embarks on extreme projects to bring attention to important global issues and inspire positive change. 100% of his media income is donated to grassroots nonprofits. 
         His YouTube channel is a source to educate, inspire and help others to live more sustainable, equal and just lives. Videos frequently cover sustainable living, simple living, growing your own food, gardening, self-sufficiency, minimalism, off the grid living, zero waste, living in a tiny house and permaculture.
         
         Find Rob Greenfield on:
         Website: https://www.RobGreenfield.org​
         Instagram: https://www.instagram.com/RobJGreenfield​ @RobJGreenfield
         Facebook: https://www.facebook.com/RobGreenfield​ 
         YouTube: https://www.youtube.com/RobGreenfield​
         Twitter: https://twitter.com/RobJGreenfield​ @RobJGreenfield 
         — 
         Help us caption & translate this video! 
         https://amara.org/v/CLT3G/​
         License
         Creative Commons Attribution license (reuse allowed)`,
         duration: '10 min',
      },
   ]);

   const [selectedLecture, setSelectedLecture] = React.useState(0);

   const onToggleSidebar = () => {
      
      setShowSidebar(prevState=> !prevState);
   };

   const onSelectedLecture = (index) => {
      setSelectedLecture(index);
   };

   return (
      <div>
         <div className="layout content">
            {
               <Sidebar
                  className="sidebar"
                  sidebarToggle={onToggleSidebar}
                  sidebar={showSidebar}
                  lectures={courseLectures}
                  clicked={onSelectedLecture}
               />
            }
            <div className="main">
               <div class="content">
                  <ReactPlayer
                     url={courseLectures[selectedLecture].url}
                     width="1080px"
                     height="720px"
                  />
               </div>
               <Description
                  title={courseLectures[selectedLecture].title}
                  description={courseLectures[selectedLecture].descriptions}
               />
            </div>
         </div>
      </div>
   );
};
export default CourseContent;
