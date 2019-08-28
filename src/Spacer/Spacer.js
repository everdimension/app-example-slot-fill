import React from 'react';
import PropTypes from 'prop-types';
import { UNIT } from '../styles.js';

const propTypes = {
  factor: PropTypes.number,
};

export function Spacer({ factor = 6 }) {
  return <div style={{ height: UNIT * factor }} />;
}

Spacer.propTypes = propTypes;
