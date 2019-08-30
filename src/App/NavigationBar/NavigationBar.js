import React from 'react';
import { Button } from '@blueprintjs/core';
import { Slot } from '@wordpress/components';
import { Popover, PopoverInteractionKind } from '@blueprintjs/core';
import { Menu, MenuItem } from '@blueprintjs/core';
import { Navbar, Alignment } from '@blueprintjs/core';
import { User } from '../../User/User.js';

export function NavigationBar() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>UI Labs</Navbar.Heading>
        <Navbar.Divider />
        <Button>hehe</Button>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Popover
          interactionKind={PopoverInteractionKind.HOVER}
          hoverOpenDelay={0}
          content={
            <Menu>
              <Slot name="userMenu" />
              <MenuItem text="logout" icon="log-out" />
            </Menu>
          }
        >
          <User imageSize={28} name="Random User" />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
}
