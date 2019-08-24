import React from 'react';
import { UNIT } from '../styles.js';

export function Pillarbox({ factor = 1, ...props }) {
  return (
    <div
      style={{ paddingLeft: UNIT * factor, paddingRight: factor * 1 }}
      {...props}
    />
  );
}
