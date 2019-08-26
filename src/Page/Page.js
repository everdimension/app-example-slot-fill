import React from 'react';
import { H1 } from '@blueprintjs/core';
import { Letterbox } from '../Letterbox/Letterbox.js';
import { Pillarbox } from '../Pillarbox/Pillarbox.js';

const style = { height: '100%' };
export function Page({ renderHeading, children }) {
  return (
    <Pillarbox factor={4} style={style}>
      <Letterbox factor={4} style={style}>
        <H1>{renderHeading()}</H1>
        {children}
      </Letterbox>
    </Pillarbox>
  );
}
