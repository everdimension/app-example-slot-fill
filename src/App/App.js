import React from 'react';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { SlotFillProvider, Slot } from '@wordpress/components';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import { Navbar, Alignment } from '@blueprintjs/core';
import { Classes } from '@blueprintjs/core';
import { Colors } from '@blueprintjs/core';
import './App.css';
import { Keybinding } from '../Hotkeys/Hotkeys.js';
import { Editor } from '../Editor/Editor.js';
import { Feed } from '../Feed/Feed.js';
import { Followers } from '../Followers/Followers.js';
import { Settings } from '../Settings/Settings.js';
import { Sidenav } from '../Sidenav/Sidenav.js';
import { MessagesPlugin } from '../Messages/MessagesPlugin.js';

const { useState } = React;

export function App() {
  const [theme, setTheme] = useState(Classes.DARK);
  return (
    <SlotFillProvider>
      <BrowserRouter>
        <div
          className={theme}
          style={{
            display: 'grid',
            gridTemplateColumns: '300px auto',
            gridTemplateRows: 'min-content auto',
            minHeight: '100vh',
            backgroundColor:
              theme === Classes.DARK ? Colors.DARK_GRAY4 : Colors.WHITE,
          }}
        >
          <div style={{ gridColumn: '1 / -1' }}>
            <Navbar>
              <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>UI Labs</Navbar.Heading>
                <Navbar.Divider />
                <Button>hehe</Button>
              </Navbar.Group>
            </Navbar>
          </div>
          <Sidenav theme={theme} />
          <Route path="/" exact render={() => <Feed />} />
          <Route path="/editor" render={() => <Editor />} />
          <Route path="/Followers" render={() => <Followers />} />
          <Route path="/settings" render={() => <Settings />} />
          <Slot name="pageContent" />
          <Keybinding
            combo="ctrl+l"
            onKeyDown={() => {
              const newTheme = theme === Classes.DARK ? '' : Classes.DARK;
              setTheme(newTheme);
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
                <Keybinding
                  combo="ctrl+h"
                  onKeyDown={() => history.push('/')}
                />
              </>
            )}
          />
          <Slot name="keybindings" />
        </div>
        <MessagesPlugin />
      </BrowserRouter>
    </SlotFillProvider>
  );
}
