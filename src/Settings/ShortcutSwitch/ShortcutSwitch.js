import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@blueprintjs/core';
import { Tag } from '@blueprintjs/core';

const propTypes = {
  shortcut: PropTypes.string,
  label: PropTypes.string,
};

export function ShortcutSwitch({ shortcut, label }) {
  const [key1, key2] = shortcut.split('+');
  return (
    <>
      <Switch defaultChecked large label={label} />
      <span>
        <Tag large minimal>
          {key1}
        </Tag>
        {' + '}
        <Tag large minimal>
          {key2}
        </Tag>
      </span>
    </>
  );
}

ShortcutSwitch.propTypes = propTypes;
