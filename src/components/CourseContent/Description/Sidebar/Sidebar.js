import React from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './Sidebar.css';

const Sidebar = (props) => {
   const listItems = props.lectures.map((lecture, index) => (
      <List
         onClick={() => {
            props.clicked(index);
         }}
         className="item"
         key={index}
      >
         <h4>{`${index + 1}. ${lecture.title}`}</h4>
         <span>{lecture.duration}</span>
        
      </List>
   ));

   const sidebar = props.sidebar ? (
      <div className="sidebar">
         <Button
            variant="outlined"
            color="default"
            endIcon={<NavigateBeforeIcon />}
            onClick={props.sidebarToggle}
         >
            Hide Sidebar
         </Button>
         <div id="list" className="pure-u-1">
            {listItems}
         </div>
      </div>
   ) : (
      <Button
         variant="contained"
         color="default"
         endIcon={<NavigateNextIcon />}
         onClick={props.sidebarToggle}
      >
         Show Sidebar
      </Button>
   );

   return sidebar;
};

export default Sidebar;
