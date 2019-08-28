import React from 'react';
import { User } from '../User/User.js';
import { Page } from '../Page/Page.js';

export function Followers() {
  return (
    <Page renderHeading={() => 'Followers'}>
      <div style={{ display: 'grid', gridGap: 10 }}>
        <User />
        <User />
        <User />
      </div>
    </Page>
  );
}
