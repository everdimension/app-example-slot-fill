import React from 'react';
import { Button } from '@blueprintjs/core';

export function Tools() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 100px)',
        height: 80,
        gridGap: 10,
      }}
    >
      <Button large icon="git-repo" />
      <Button large icon="git-new-branch" />
      <Button large icon="git-push" />
    </div>
  );
}
