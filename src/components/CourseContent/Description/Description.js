import React from 'react';
import './Description.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../UI/TabPanel/TabPanel';

const Description = (props) => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className="description">
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
         >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
         </Tabs>

         <TabPanel value={value} index={0}>
            <Card className="card">
               <CardContent>
                  <h2>{props.title}</h2>
                  <p>
                     {props.description}
                  </p>
               </CardContent>
               <CardActions>
                  <button >Learn More</button>
               </CardActions>
            </Card>
         </TabPanel>
         <TabPanel value={value} index={1}>
            Item Two
         </TabPanel>
         <TabPanel value={value} index={2}>
            Item Three
         </TabPanel>
      </div>
   );
};

export default Description;
