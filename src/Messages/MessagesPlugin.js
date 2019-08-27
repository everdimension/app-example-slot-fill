import React from 'react';
import { Fill } from '@wordpress/components';
import { MenuItem } from '@blueprintjs/core';
import { Route } from 'react-router';
import { Messages } from './Messages.js';
import { Keybinding } from '../Hotkeys/Hotkeys.js';
import { ShortcutSwitch } from '../Settings/ShortcutSwitch/ShortcutSwitch.js';

export function MessagesPlugin() {
  return (
    <React.Fragment>
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
      <Fill name="pageContent">
        <Route path="/messages" render={() => <Messages />} />
      </Fill>
      <Fill name="settings">
        <ShortcutSwitch label="Messages" shortcut="ctrl+M" />
      </Fill>
      <Fill name="keybindings">
        <Route
          render={({ history }) => (
            <Keybinding
              combo="ctrl+m"
              onKeyDown={() => history.push('/messages')}
            />
          )}
        />
      </Fill>
    </React.Fragment>
  );
}
