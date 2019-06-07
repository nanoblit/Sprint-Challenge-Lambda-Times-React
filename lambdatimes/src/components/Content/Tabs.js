import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, selectTabHandler, selectedTab }) => (
  <div className="tabs">
    <div className="topics">
      <span className="title">TRENDING TOPICS:</span>
      {tabs.map((tab, idx) => (
        <Tab key={idx} selectTabHandler={selectTabHandler} selectedTab={selectedTab} tab={tab} />
      ))}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

Tabs.defaultProps = {
  tabs: [],
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
