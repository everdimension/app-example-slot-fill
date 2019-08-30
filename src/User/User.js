import React from 'react';
import PropTypes from 'prop-types';

export function User({ imageSize = 64, name = 'User name' }) {
  return (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateColumns: 'min-content auto',
        gridGap: 10,
        alignItems: 'center',
      }}
    >
      <img
        src={`http://placehold.it/${imageSize}x${imageSize}`}
        alt="someone"
        width={imageSize}
        height={imageSize}
        style={{
          borderRadius: '50%',
        }}
      />
      <span>{name}</span>
    </div>
  );
}

User.propTypes = {
  imageSize: PropTypes.number,
  name: PropTypes.number,
};
