import React from 'react';

export function User() {
  const imageSize = 64;
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
      <span>User name</span>
    </div>
  );
}
