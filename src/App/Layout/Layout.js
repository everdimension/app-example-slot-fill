import React from 'react';
import PropTypes from 'prop-types';
import { Classes } from '@blueprintjs/core';
import { Colors } from '@blueprintjs/core';

export function Layout({ theme, ...props }) {
  return (
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
      {...props}
    />
  );
}

Layout.propTypes = {
  theme: PropTypes.string.isRequired,
};
