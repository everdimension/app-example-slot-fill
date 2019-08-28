import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from '@blueprintjs/core';
import { Letterbox } from '../Letterbox/Letterbox.js';
import { Pillarbox } from '../Pillarbox/Pillarbox.js';
import { Spacer } from '../Spacer/Spacer.js';

const style = { height: '100%' };

const propTypes = {
  renderHeading: PropTypes.func.isRequired,
  children: PropTypes.node,
};
export function Page({ renderHeading, children }) {
  return (
    <Pillarbox factor={10} style={style}>
      <Letterbox
        factor={4}
        style={{
          display: 'flex',
          flexDirection: 'column',
          ...style,
        }}
      >
        <H1>{renderHeading()}</H1>
        <Spacer />
        <div style={{ flexGrow: 1 }}>{children}</div>
      </Letterbox>
    </Pillarbox>
  );
}

Page.propTypes = propTypes;
