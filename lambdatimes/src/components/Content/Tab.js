import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ selectedTab, tab, selectTabHandler }) => (
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab' */
  <div
    className={tab === selectedTab ? 'tab active-tab' : 'tab'}
    onClick={() => selectTabHandler(tab)}
  >
    {tab.toUpperCase()}
  </div>
);
// Make sure you include PropTypes on your props.

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};

export default Tab;
