import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

/*
Props:
tabs={this.state.tabs}
selectedTab={this.state.selected}
selectTabHandler={this.changeSelected}
*/
const Tabs = props => {
  let tabs = props.tabs.map(tab => (
    <Tab
      tab={tab}
      selectTabHandler={props.selectTabHandler}
      selectedTab={props.selectedTab}
    />
  ));
  if (!tabs.length) {
    ("Loading...");
  }
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component
           for each one. give the tab component a `selectTabHandler`, the
           'selectedTab`, and the `tab` itself as props*/}
        {tabs}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  // Since I don't necessarily know the number of tabs, I'll verify
  // its a string inside of Tab.js
  tabs: PropTypes.array.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};
export default Tabs;
