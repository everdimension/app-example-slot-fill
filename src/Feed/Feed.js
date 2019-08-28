import React from 'react';
import { Page } from '../Page/Page.js';

const feedImages = [
  require('../assets/mountains1.jpg'),
  require('../assets/mountains2.png'),
  require('../assets/mountains3.jpg'),
  require('../assets/goat.jpeg'),
];

export function Feed() {
  return (
    <Page renderHeading={() => 'Feed'}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          gridAutoRows: 200,
          gridGap: 10,
        }}
      >
        {feedImages.map(src => (
          <div
            key={src}
            style={{
              backgroundImage: `url(${src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              border: '4px solid white',
            }}
          />
        ))}
      </div>
    </Page>
  );
}
