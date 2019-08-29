import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@blueprintjs/core';
import { Tag } from '@blueprintjs/core';

export function ShortcutSwitch({
  shortcut,
  label,
  defaultChecked = true,
  onChange = () => {},
}) {
  const [key1, key2] = shortcut.split('+');
  return (
    <>
      <Switch
        large
        label={label}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
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

ShortcutSwitch.propTypes = {
  shortcut: PropTypes.string,
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};
