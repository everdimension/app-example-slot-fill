import React from 'react';
import PropTypes from 'prop-types';
import { UNIT } from '../styles.js';

const propTypes = {
  factor: PropTypes.number,
  style: PropTypes.object,
};

export function Pillarbox({ factor = 1, style, ...props }) {
  return (
    <div
      style={{ paddingLeft: UNIT * factor, paddingRight: factor * 1, ...style }}
      {...props}
    />
  );
}

Pillarbox.propTypes = propTypes;
