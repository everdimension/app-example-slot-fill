import React from 'react';
import isHotKey from 'is-hotkey';

const { useEffect } = React;

export function Keybinding({ combo, onKeyDown }) {
  const handler = React.useRef();
  handler.current = onKeyDown;

  useEffect(() => {
    function handleKeyDown(event) {
      if (isHotKey(combo, event)) {
        event.preventDefault();
        handler.current(event);
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [combo]);
  return null;
}
