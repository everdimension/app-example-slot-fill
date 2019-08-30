import React from 'react';
import { Fill } from '@wordpress/components';
import { MenuItem } from '@blueprintjs/core';
import { Tag } from '@blueprintjs/core';
import { Route } from 'react-router-dom';
import { Messages } from './Messages.js';
import { Keybinding } from '../Hotkeys/Hotkeys.js';
import { ShortcutSwitch } from '../Settings/ShortcutSwitch/ShortcutSwitch.js';

const { useState } = React;

export function MessagesFeature() {
  const [shortcutEnabled, setShortcutEnabled] = useState(true);
  return (
    <>
      <Fill name="navigation">
        <Route
          render={({ history }) => (
            <MenuItem
              text="Messages"
              icon="chat"
              href="/messages"
              onClick={event => {
                event.preventDefault();
                history.push(event.currentTarget.pathname);
              }}
            />
          )}
        />
      </Fill>
      <Fill name="currentView">
        <Route path="/messages" render={() => <Messages />} />
      </Fill>
      <Fill name="settings">
        <ShortcutSwitch
          defaultChecked={shortcutEnabled}
          onChange={event => {
            setShortcutEnabled(event.target.checked);
          }}
          label="Messages"
          shortcut="ctrl+M"
        />
      </Fill>
      <Fill name="keybindings">
        <Route
          render={({ history }) => {
            return shortcutEnabled ? (
              <Keybinding
                combo="ctrl+m"
                onKeyDown={() => history.push('/messages')}
              />
            ) : null;
          }}
        />
      </Fill>
      <Fill name="userMenu">
        <Route
          render={({ history }) => (
            <MenuItem
              text="Messages"
              labelElement={<Tag intent="primary">13</Tag>}
              icon="chat"
              href="/messages"
              onClick={event => {
                event.preventDefault();
                history.push(event.currentTarget.pathname);
              }}
            />
          )}
        />
      </Fill>
    </>
  );
}
