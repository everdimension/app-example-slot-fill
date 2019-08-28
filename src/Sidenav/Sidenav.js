import React from 'react';
import PropTypes from 'prop-types';
import { Classes } from '@blueprintjs/core';
import { Colors } from '@blueprintjs/core';
import { MenuItem } from '@blueprintjs/core';
import { Slot } from '@wordpress/components';
import { Route } from 'react-router-dom';
import { UNIT } from '../styles.js';

const propTypes = {
  theme: PropTypes.string,
};

export function Sidenav({ theme }) {
  return (
    <nav
      style={{
        padding: UNIT * 4,
        backgroundColor:
          theme === Classes.DARK ? Colors.DARK_GRAY5 : Colors.LIGHT_GRAY5,
      }}
    >
      <Route
        render={({ history }) => (
          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            <MenuItem
              text="Feed"
              icon="media"
              href="/"
              onClick={event => {
                event.preventDefault();
                history.push(event.currentTarget.pathname);
              }}
            />
            <MenuItem
              text="Editor"
              icon="build"
              href="/editor"
              onClick={event => {
                event.preventDefault();
                history.push(event.currentTarget.pathname);
              }}
            />
            <MenuItem
              text="Followers"
              icon="walk"
              href="/Followers"
              onClick={event => {
                event.preventDefault();
                history.push(event.currentTarget.pathname);
              }}
            />
            <MenuItem
              text="Settings"
              icon="cog"
              href="/settings"
              onClick={event => {
                event.preventDefault();
                history.push(event.currentTarget.pathname);
              }}
            />
            <Slot name="navigation" />
          </ul>
        )}
      />
    </nav>
  );
}

Sidenav.propTypes = propTypes;
