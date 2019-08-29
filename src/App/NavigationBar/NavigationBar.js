import React from 'react';
import { Button } from '@blueprintjs/core';
import { Navbar, Alignment } from '@blueprintjs/core';

export function NavigationBar() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>UI Labs</Navbar.Heading>
        <Navbar.Divider />
        <Button>hehe</Button>
      </Navbar.Group>
    </Navbar>
  );
}
