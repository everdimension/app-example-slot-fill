import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Classes } from '@blueprintjs/core';
import { Keybinding } from '../../Hotkeys/Hotkeys.js';

export function Keybindings({ theme, onSetTheme }) {
  return (
    <>
      <Keybinding
        combo="ctrl+l"
        onKeyDown={() => {
          const newTheme = theme === Classes.DARK ? '' : Classes.DARK;
          onSetTheme(newTheme);
        }}
      />
      <Route
        render={({ history }) => (
          <>
            <Keybinding
              combo="ctrl+e"
              onKeyDown={() => history.push('/editor')}
            />
            <Keybinding
              combo="ctrl+f"
              onKeyDown={() => history.push('/Followers')}
            />
            <Keybinding
              combo="ctrl+s"
              onKeyDown={() => history.push('/settings')}
            />
            <Keybinding combo="ctrl+h" onKeyDown={() => history.push('/')} />
          </>
        )}
      />
    </>
  );
}

Keybindings.propTypes = {
  theme: PropTypes.string.isRequired,
  onSetTheme: PropTypes.func.isRequired,
};
