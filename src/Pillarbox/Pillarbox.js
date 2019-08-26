import React from 'react';
import { UNIT } from '../styles.js';

export function Pillarbox({ factor = 1, style, ...props }) {
  return (
    <div
      style={Object.assign(
        { paddingLeft: UNIT * factor, paddingRight: factor * 1 },
        style,
      )}
      {...props}
    />
  );
}
