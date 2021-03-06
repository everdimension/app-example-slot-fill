import React from 'react';
import { Tools } from './Tools/Tools.js';
import { Pillarbox } from '../Pillarbox/Pillarbox.js';
import { Page } from '../Page/Page.js';

export function Editor() {
  return (
    <Page renderHeading={() => 'Image Editor'}>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Pillarbox factor={4}>
          <div
            style={{
              textAlign: 'center',
              maxWidth: 700,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <img
              src={require('../assets/goat.jpeg')}
              alt="A goat. Apply filters."
              style={{ width: '100%' }}
            />
          </div>
        </Pillarbox>
        <Tools />
      </div>
    </Page>
  );
}
