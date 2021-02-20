const TabPanel = (props) => {
   const { children, value, index,} = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         
      >
       { children }
      </div>
   );
};

export default TabPanel;
