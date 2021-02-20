import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './Sidebar.css';

const Sidebar = (props) => {
   const listItems = props.lectures.map((lecture, index) => (
      <ListItem
         className="lecture-item"
         onClick={() => {
            props.clicked(index);
         }}
         key={index}
      >
         <ListItemText
            primary={`${index + 1}. ${lecture.title}`}
            secondary={lecture.duration}
         />
         <Divider />
      </ListItem>
   ));

   const sidebar = props.sidebar ? (
      <div className="sidebar">
         <IconButton
            color="secondary"
            aria-label="add"
            onClick={props.sidebarToggle}
         >
            <NavigateBeforeIcon />
         </IconButton>
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
