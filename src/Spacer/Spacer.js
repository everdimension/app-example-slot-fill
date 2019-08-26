import React from 'react';
import { UNIT } from '../styles.js';

export function Spacer({ factor = 6 }) {
  return <div style={{ height: UNIT * factor }} />;
}
