import React from 'react';
import { H1 } from '@blueprintjs/core';
import { Letterbox } from '../Letterbox/Letterbox.js';
import { Pillarbox } from '../Pillarbox/Pillarbox.js';
import { Spacer } from '../Spacer/Spacer.js';

const style = { height: '100%' };
export function Page({ renderHeading, children }) {
  return (
    <Pillarbox factor={10} style={style}>
      <Letterbox
        factor={4}
        style={Object.assign(
          {
            display: 'flex',
            flexDirection: 'column',
          },
          style,
        )}
      >
        <H1>{renderHeading()}</H1>
        <Spacer />
        <div style={{ flexGrow: 1 }}>{children}</div>
      </Letterbox>
    </Pillarbox>
  );
}
