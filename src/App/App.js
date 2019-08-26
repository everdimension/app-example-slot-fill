import React from 'react';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import { Switch } from '@blueprintjs/core';
import { Menu, MenuItem } from '@blueprintjs/core';
import { Classes } from '@blueprintjs/core';
import { Colors } from '@blueprintjs/core';
import './App.css';
import { Logo } from '../Logo/Logo.js';
import { Keybinding } from '../Hotkeys/Hotkeys.js';
import { UNIT } from '../styles.js';
import { Editor } from '../Editor/Editor.js';
import { Feed } from '../Feed/Feed.js';
import { Friends } from '../Friends/Friends.js';
import { Page } from '../Page/Page.js';

console.log(Object.keys(Colors));
const { useState } = React;

export function App() {
  const [theme, setTheme] = useState(Classes.DARK);
  return (
    <BrowserRouter>
      <div
        className={theme}
        style={{
          display: 'grid',
          gridTemplateColumns: '300px auto',
          minHeight: '100vh',
          backgroundColor:
            theme === Classes.DARK ? Colors.DARK_GRAY4 : Colors.WHITE,
        }}
      >
        <nav
          style={{
            padding: UNIT * 4,
            backgroundColor:
              theme === Classes.DARK ? Colors.DARK_GRAY5 : Colors.LIGHT_GRAY5,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'min-content auto',
              gridGap: 10,
              alignItems: 'center',
            }}
          >
            <Logo /> <span style={{ fontSize: 20 }}>UI Labs</span>
          </div>
          <Route
            render={({ history }) => (
              <ul style={{ padding: 0, listStyle: 'none' }}>
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
                  text="Friends"
                  icon="walk"
                  href="/friends"
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
              </ul>
            )}
          />
        </nav>
        <Route path="/" exact render={() => <Feed />} />
        <Route path="/editor" render={() => <Editor />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route
          path="/settings"
          render={() => (
            <Page renderHeading={() => 'Settings'}>
              <div>
                <Switch large label="Shortcuts"></Switch>
                <Switch large label="Something else"></Switch>
              </div>
            </Page>
          )}
        />
        <Keybinding
          combo="cmd+l"
          onKeyDown={() => {
            const newTheme = theme === Classes.DARK ? '' : Classes.DARK;
            setTheme(newTheme);
          }}
        ></Keybinding>
      </div>
    </BrowserRouter>
  );
}
