import React from 'react';
import { H2 } from '@blueprintjs/core';
import { Switch } from '@blueprintjs/core';
import { Slot } from '@wordpress/components';
import { Page } from '../Page/Page.js';
import { Spacer } from '../Spacer/Spacer.js';
import { ShortcutSwitch } from './ShortcutSwitch/ShortcutSwitch.js';

export function Settings() {
  return (
    <Page renderHeading={() => 'Settings'}>
      <div>
        <Switch large label="Shortcuts" />
        <Switch large label="Something else" />
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
        <ShortcutSwitch label="Dark / Light Theme" shortcut="ctrl+L" />
        <ShortcutSwitch label="Settings" shortcut="ctrl+S" />
        <ShortcutSwitch label="Feed" shortcut="ctrl+H" />
        <ShortcutSwitch label="Editor" shortcut="ctrl+E" />
        <ShortcutSwitch label="Followers" shortcut="ctrl+F" />
        <Slot name="settings" />
      </div>
    </Page>
  );
}
