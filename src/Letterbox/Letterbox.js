import React from 'react';
import { UNIT } from '../styles.js';

export function Letterbox({ factor = 1, ...props }) {
  return (
    <div
      style={{ paddingTop: UNIT * factor, paddingBottom: factor * 1 }}
      {...props}
    />
  );
}
