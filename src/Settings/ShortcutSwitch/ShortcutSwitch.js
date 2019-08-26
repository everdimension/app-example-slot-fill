import React from 'react';
import { Switch } from '@blueprintjs/core';
import { Tag } from '@blueprintjs/core';

export function ShortcutSwitch({ shortcut, label }) {
  const [key1, key2] = shortcut.split('+');
  return (
    <React.Fragment>
      <Switch defaultChecked large label={label} />
      <span>
        <Tag large minimal>
          {key1}
        </Tag>{' '}
        +{' '}
        <Tag large minimal>
          {key2}
        </Tag>
      </span>
    </React.Fragment>
  );
}
