import React from "react";
import PropTypes from "prop-types";
/*
tab={tab}
selectTabHandler={props.selectTabHandler}
selectedTab={props.selectedTab}
*/
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  let className = "tab";
  if (props.tab === props.selectedTab) {
    className += " active-tab";
  }
  return (
    <div
      className={className}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
        return props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};

export default Tab;
