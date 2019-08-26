import React from 'react';
import { UNIT } from '../styles.js';

export function Letterbox({ factor = 1, style, ...props }) {
  return (
    <div
      style={Object.assign(
        { paddingTop: UNIT * factor, paddingBottom: factor * 1 },
        style,
      )}
      {...props}
    />
  );
}
