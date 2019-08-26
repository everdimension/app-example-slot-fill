import React from 'react';
import { Tools } from './Tools/Tools.js';
import { Pillarbox } from '../Pillarbox/Pillarbox.js';
import { Page } from '../Page/Page.js';

export function Editor() {
  return (
    <Page renderHeading={() => 'Image Editor'}>
      <div
        style={{
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
              alt="Image of a goat. The image should be edited."
              style={{ width: '100%' }}
            />
          </div>
        </Pillarbox>
        <Tools />
      </div>
    </Page>
  );
}
