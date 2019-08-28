import React from 'react';
import PropTypes from 'prop-types';
import { UNIT } from '../styles.js';

const propTypes = {
  factor: PropTypes.number,
  style: PropTypes.object,
};

export function Letterbox({ factor = 1, style, ...props }) {
  return (
    <div
      style={{ paddingTop: UNIT * factor, paddingBottom: factor * 1, ...style }}
      {...props}
    />
  );
}

Letterbox.propTypes = propTypes;
