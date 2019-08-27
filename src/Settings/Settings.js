import React from 'react';
import { H2 } from '@blueprintjs/core';
import { Switch } from '@blueprintjs/core';
import { Page } from '../Page/Page.js';
import { Spacer } from '../Spacer/Spacer.js';
import { ShortcutSwitch } from './ShortcutSwitch/ShortcutSwitch.js';

export function Settings() {
  return (
    <Page renderHeading={() => 'Settings'}>
      <div>
        <Switch large label="Shortcuts"></Switch>
        <Switch large label="Something else"></Switch>
      </div>
      <Spacer />
      <H2>Keyboard Shortcuts</H2>
      <Spacer />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '250px auto',
          gridGap: 10,
        }}
      >
        <ShortcutSwitch label="Dark / Light Theme" shortcut="cmd+L" />
        <ShortcutSwitch label="Settings" shortcut="cmd+S" />
        <ShortcutSwitch label="Feed" shortcut="cmd+H" />
        <ShortcutSwitch label="Editor" shortcut="cmd+E" />
        <ShortcutSwitch label="Followers" shortcut="cmd+F" />
      </div>
    </Page>
  );
}
