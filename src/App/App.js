import React from 'react';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { SlotFillProvider, Slot } from '@wordpress/components';
import { BrowserRouter } from 'react-router-dom';
import { Classes } from '@blueprintjs/core';
import './App.css';
import { Sidenav } from '../Sidenav/Sidenav.js';
import { MessagesPlugin } from '../Messages/MessagesPlugin.js';
import { Layout } from './Layout/Layout.js';
import { NavigationBar } from './NavigationBar/NavigationBar.js';
import { CurrentView } from './CurrentView/CurrentView.js';
import { Keybindings } from './Keybindings/Keybindings.js';

const { useState } = React;

export function App() {
  const [theme, setTheme] = useState(Classes.DARK);
  return (
    <SlotFillProvider>
      <BrowserRouter>
        <Layout theme={theme}>
          <div style={{ gridColumn: '1 / -1' }}>
            <NavigationBar />
          </div>

          <Sidenav theme={theme} />

          <CurrentView />

          <Slot name="currentView" />
        </Layout>
        <Keybindings theme={theme} onSetTheme={setTheme} />
        <Slot name="keybindings" />
        <MessagesPlugin />
      </BrowserRouter>
    </SlotFillProvider>
  );
}
