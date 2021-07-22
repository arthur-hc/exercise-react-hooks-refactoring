// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider ({ children }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);
  const context = {
    red,
    setRed,
    blue,
    setBlue,
    yellow,
    setYellow,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
